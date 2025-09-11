import {
  Button, Card, Image, Text, Grid, CloseButton, Dialog, Portal,
  Accordion, Box, Flex, Center, Heading, Field, Input, Stack,
  Span, Separator
} from "@chakra-ui/react";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import { useForm } from "react-hook-form";
import { toaster } from "../../../ui/toaster";
import { useState, useMemo, useCallback, memo } from "react";

// Мемоизированный компонент для предотвращения ненужных ререндеров
const MemoizedSpecs = memo(({ groupedSpecs }) => {
  // Берем только первые 4 раздела для отображения в правом окне
  const limitedSections = Object.entries(groupedSpecs).slice(0, 4);

  return limitedSections.map(([category, items]) => (
    <Box key={category} mb="4">
      <Heading as="h4" size="md" mb="2">{category}</Heading>
      {/* Берем только первые 2 характеристики в каждом разделе для правого окна */}
      {items.slice(0, 2).map((item, i) => (
        <Flex key={i} justifyContent="space-between" mb="2">
          <Span>{item.split(":")[0]}</Span>
          <Span>{item.split(":").slice(1).join(":")}</Span>
        </Flex>
      ))}
      <Separator />
    </Box>
  ));
});

// Выносим форму в отдельный компонент для оптимизации
const LeaseForm = memo(({ onSubmit, isLoading, register, errors, isDirty, isValid, product }) => {
  return (
    <Dialog.Content as="form" onSubmit={onSubmit} noValidate>
      <Dialog.Header>
        <Dialog.CloseTrigger asChild>
          <CloseButton />
        </Dialog.CloseTrigger>
        <Dialog.Title>Оформление Заявки</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body pb="4">
        <Stack gap="4">
          <Field.Root invalid={!!errors.name}>
            <Field.Label>Имя</Field.Label>
            <Input
              placeholder="Имя"
              {...register("name", {
                required: "Имя обязательно",
                minLength: {
                  value: 2,
                  message: "Имя должно содержать минимум 2 символа"
                },
                maxLength: {
                  value: 50,
                  message: "Имя не должно превышать 50 символов"
                },
                pattern: {
                  value: /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/,
                  message: "Имя может содержать только буквы, пробелы и дефисы"
                }
              })}
            />
            {errors.name && (
              <Field.ErrorText>
                {errors.name.message}
              </Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.phone}>
            <Field.Label>Телефон</Field.Label>
            <Input
              placeholder="+7 (999) 999-99-99"
              {...register("phone", {
                required: "Телефон обязателен",
                pattern: {
                  value: /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                  message: "Введите корректный номер телефона"
                },
              })}
            />
            {errors.phone && (
              <Field.ErrorText>
                {errors.phone.message}
              </Field.ErrorText>
            )}
          </Field.Root>

          {/* Скрытое поле для модели */}
          <input type="hidden" {...register("model")} value={product.model} />
        </Stack>
      </Dialog.Body>
      <Dialog.Footer>
        <Button
          type="submit"
          size="sm"
          variant="solid"
          bg="brand.303"
          color="brand.304"
          isDisabled={!isDirty || !isValid || isLoading}
          isLoading={isLoading}
          loadingText="Отправка..."
        >
          Отправить заявку
        </Button>
      </Dialog.Footer>
    </Dialog.Content>
  );
});

const ProductCard = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { register, handleSubmit, formState: { errors, isDirty, isValid }, reset } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  // Мемоизация группировки спецификаций
  const { groupedSpecs, accordionItems } = useMemo(() => {
    const specs = Array.isArray(product?.specifications) ? product.specifications : [];

    const grouped = specs.reduce((acc, spec) => {
      const [category, ...rest] = String(spec).split(":");
      const value = rest.join(":");
      if (!acc[category]) acc[category] = [];
      acc[category].push(value);
      return acc;
    }, {});

    const accordion = Object.entries(grouped).map(([title, items]) => ({
      value: title,
      title,
      text: (
        <Box>
          {items.map((item, i) => (
            <Flex key={i} justifyContent="space-between" marginBottom="2">
              <Span>{item.split(":")[0]}</Span>
              <Span>{item.split(":").slice(1).join(":")}</Span>
            </Flex>
          ))}
        </Box>
      ),
    }));

    return { groupedSpecs: grouped, accordionItems: accordion };
  }, [product?.specifications]);

  // Мемоизация обработчика отправки формы
  const onSubmit = useCallback(async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_DOMAIN_URL}/api/submit-model`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          model: data.model // Только модель передаем на сервер
        })
      });

      if (response.ok) {
        toaster.success({
          title: "Успешно!",
          description: "Заявка отправлена! Мы свяжемся с вами в ближайшее время",
          duration: 5000,
          closable: true,
        });
        reset();
        setDialogOpen(false);
        if (window.ym) {
          window.ym(103878066, 'reachGoal', 'submit-model'); // Яндекс.Метрика
        }
      } else if (response.status === 429) {
        toaster.warning({
          title: "Превышен лимит заявок",
          description: "Вы уже подали заявку, непереживайте, менеджеры обязательно с вами свяжутся",
          duration: 8000, // Увеличиваем длительность для важного сообщения
          closable: true,
        })
      } else {
        toaster.error({
          title: "Ошибка",
          description: "Ошибка при отправке заявки. Попробуйте еще раз.",
          duration: 5000,
          closable: true,
        });
      }
    } catch (error) {
      toaster.error({
        title: "Ошибка сети",
        description: "Проверьте подключение к интернету и попробуйте еще раз.",
        duration: 5000,
        closable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }, [reset]);

  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={product.images[0]}
        alt={product.name}
        loading="lazy"
      />
      <Card.Body gap="2">
        <Card.Title>{product.name}</Card.Title>
        <Card.Description lineClamp={"4"}>
          {product.description || "Идеальный погрузчик под ваши любые задачи."}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {product.price > 0 ? `От ${product.price.toLocaleString()} руб.` : "Цена по запросу"}
        </Text>
      </Card.Body>

      <Card.Footer gap="2">
        <Dialog.Root open={dialogOpen} onOpenChange={(e) => setDialogOpen(e.open)}>
          <Dialog.Trigger asChild>
            <Button variant="solid" bg="brand.303">
              Заказать лизинг
            </Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <LeaseForm
                onSubmit={handleSubmit(onSubmit)}
                isLoading={isLoading}
                register={register}
                errors={errors}
                isDirty={isDirty}
                isValid={isValid}
                product={product}
              />
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>

        <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom" scrollBehavior="inside">
          <Dialog.Trigger asChild>
            <Button variant="ghost">Подробнее</Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title fontSize={{ base: "lg", small: "3xl", md: "5xl" }}>
                    {product.name}
                  </Dialog.Title>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Header>

                <Dialog.Body>
                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                    <Center>
                      <Box>
                        <SimpleSlider images={product?.images || []} />
                      </Box>
                    </Center>

                    <Box>
                      <Box fontSize={{ base: "md", md: "2xl" }} fontWeight="bold" mb="1.5rem" mt="1rem">
                        {product.price > 0 ? `Цена от ${product.price.toLocaleString()} руб.` : "Цена по запросу"}
                      </Box>

                      <Heading as="h3" mb="1.25rem">Характеристики</Heading>
                      <MemoizedSpecs groupedSpecs={groupedSpecs} />
                      <Box textWrap={"wrap"} fontWeight={"bold"}>

                        Внешний вид и характеристики товара могут незначительно отличаться.
                      </Box>

                      <Box textWrap={"wrap"}> Производитель постоянно работает над улучшением товара, поэтому его внешний вид и характеристики могут обновляться. Наши менеджеры с радостью предоставят вам актуальную информацию и помогут подобрать модель, которая полностью соответствует вашим ожиданиям.</Box>
                      <Button
                        variant="solid"
                        bg="brand.303"
                        color="brand.304"
                        mt="1.25rem"
                        onClick={() => setDialogOpen(true)}
                      >
                        Оставить заявку
                      </Button>
                    </Box>
                  </Grid>
                  <Heading as="h3" mb="1.25rem" mt="1.25rem">Описание</Heading>
                  <Box>{product.description}</Box>
                  <Heading as="h3" mb="1.25rem" mt="1.25rem" >Подробные характеристики</Heading>
                  <Accordion.Root collapsible defaultValue={["b"]} mt="1.25rem">
                    {accordionItems.map((item, index) => (
                      <Accordion.Item key={index} value={item.value}>
                        <Accordion.ItemTrigger>
                          <Span flex="1">{item.title}</Span>
                          <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                          <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                        </Accordion.ItemContent>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </Dialog.Body>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Card.Footer>
    </Card.Root>
  );
};

export default memo(ProductCard);