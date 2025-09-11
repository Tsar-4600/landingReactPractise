import {
  Button,
  Heading,
  Input,
  Stack,
  Box,
  Field,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toaster } from "../ui/toaster";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const [isLoading, setIsLoading] = useState(false);


  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_DOMAIN_URL}/api/submit-contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone

        })
      });

      if (response.ok) {
        toaster.success({
          title: "Успешно!",
          description: "Данные успешно отправлены!",
          duration: 5000,
          closable: true,
        });
        reset();
        if (window.ym) {
          window.ym(103878066, 'reachGoal', 'submit-contacts'); // Яндекс.Метрика
        }
      } else if (response.status === 429) {
        toaster.warning({
          title: "Превышен лимит заявок",
          description: "Вы уже подали заявку, непереживайте, менеджеры обязательно с вами свяжутся",
          duration: 8000, // Увеличиваем длительность для важного сообщения
          closable: true,
        })
      } else {
        throw new Error('Ошибка сервера');
      }
    } catch (error) {
      toaster.error({
        title: "Ошибка",
        description: "Произошла ошибка при отправке. Попробуйте еще раз.",
        duration: 5000,
        closable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacts">
      <Heading as="h2" mb={6} fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }} lineHeight={1}>
        Контакты
      </Heading>

      <Box as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={4} maxW="md">
          {/* Поле имени с Field компонентом */}
          <Field.Root invalid={!!errors.name}>
            <Field.Label>Ваше имя</Field.Label>
            <Input
              type="text"
              placeholder="Иван Иванов"
              variant="filled"
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
          {/* Поле телефона с Field компонентом */}
          <Field.Root invalid={!!errors.phone}>
            <Field.Label>Номер телефона</Field.Label>
            <Input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              variant="filled"
              {...register("phone", {
                required: "Телефон обязателен",
                pattern: {
                  value: /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                  message: "Введите корректный номер телефона"
                },
                minLength: {
                  value: 11,
                  message: "Номер должен содержать минимум 11 цифр"
                }
              })}
            />
            {errors.phone && (
              <Field.ErrorText>
                {errors.phone.message}
              </Field.ErrorText>
            )}
          </Field.Root>





          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            mt={4}
            isLoading={isLoading}
            loadingText="Отправка..."
            isDisabled={!isDirty || !isValid || isLoading}
          >
            Отправить
          </Button>

        </Stack>
      </Box>
    </section>
  );
}

export default Contacts;