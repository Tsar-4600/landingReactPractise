import { Box, Text, Flex, Button, Highlight, Image, Heading, Field, Input, Dialog, Portal, CloseButton, Stack } from "@chakra-ui/react";
import { FaRegSmile } from "react-icons/fa";


import { useForm } from "react-hook-form";
import { toaster } from "../ui/toaster";
import { useState, useCallback, memo } from "react";



const SpecialLeaseForm = memo(({ onSubmit, isLoading, register, errors, isDirty, isValid }) => {

    return (
        <Dialog.Content as="form" onSubmit={onSubmit} noValidate>
            <Dialog.Header>
                <Dialog.CloseTrigger asChild>
                    <CloseButton />
                </Dialog.CloseTrigger>
                <Dialog.Title>Оформление заявки на Лизинг</Dialog.Title>
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


function CallToActionBanner() {
    const [isLoading, setIsLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, reset } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const onSubmit = useCallback(async (data) => {
        setIsLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_DOMAIN_URL}/api/submit-SpeacialLease`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    phone: data.phone,
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
        <section>
            <Box
                bg="brand.305"
                borderRadius="lg"
                color="brand.302"
                padding={{ base: "20px", md: "30px" }}
                position="relative"
                overflow="hidden"
            >

                <Flex
                    direction={{ base: "column", lg: "row" }}


                >
                    {/* Левая часть - заголовок и преимущества */}
                    <Box flex="1" mb={{ base: "20px", lg: "0" }}>
                        <Heading
                            as="h2"
                            fontSize={{ base: "1.3rem", small: "1.8rem", md: "2.5rem", lg: "3rem" }}
                            lineHeight={1.3}
                            marginBottom="15px"
                            color="brand.304"
                        >
                            <Highlight
                                query={["ЛИЗИНГ ОТ 21%", "ZOOMLION"]}
                                styles={{ bg: "brand.303", color: "brand.304", borderRadius: "md" }}
                            >
                                УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ! Лизинг техники ZOOMLION от 19%
                            </Highlight>
                        </Heading>

                        <Flex direction="column" alignItems={{ base: "start", md: "start" }} gap={3} mb="25px">
                            <Flex alignItems="center" gap={3} >
                                <FaRegSmile size="26px" color="#000000" />
                                <Text fontSize={{ base: "0.75rem", small: "1rem", md: "1.2rem" }}>
                                    <Highlight
                                        query={["Широкий ассортимент"]}
                                        styles={{ px: "1", py: "1", bg: "brand.303", color: "brand.304", borderRadius: "md", fontWeight: "bold" }}
                                    >Широкий ассортимент</Highlight>- вся техника и запчасти в наличии
                                </Text>

                            </Flex>
                            <Flex align="center" gap={3}>
                                <FaRegSmile size="1.5rem" color="#000000" />
                                <Text fontSize={{ base: "0.75rem", small: "1rem", md: "1.2rem" }}>
                                    <Highlight
                                        query={["Выездные бригады"]}
                                        styles={{ px: "1", py: "1", bg: "brand.303", color: "brand.304", borderRadius: "md", fontWeight: "bold" }}
                                    >Выездные бригады </Highlight> - спасем от внеплановых поломок
                                </Text>

                            </Flex>
                            <Flex align="center" gap={3}>
                                <FaRegSmile size="1.5rem" color="#000000" />
                                <Text fontSize={{ base: "0.75rem", small: "1rem", md: "1.2rem" }}>
                                    <Highlight
                                        query={["Без скрытых платежей"]}
                                        styles={{ px: "1", py: "1", bg: "brand.303", color: "brand.304", borderRadius: "md", fontWeight: "bold" }}
                                    >Без скрытых платежей
                                    </Highlight>
                                    - полное сопровождение сделки
                                </Text>

                            </Flex>
                            <Flex align="center" gap={3}>
                                <FaRegSmile size="1.5rem" color="#000000" />
                                <Text fontSize={{ base: "0.75rem", small: "1rem", md: "1.2rem" }}>
                                    <Highlight
                                        query={["Выгодные условия"]}
                                        styles={{ px: "1", py: "1", bg: "brand.303", color: "brand.304", borderRadius: "md", fontWeight: "bold" }}
                                    >Выгодные условия</Highlight> -  сборка и индивидуальный подход
                                </Text>

                            </Flex>
                        </Flex>

                        <Highlight
                            query={["Специальное предложение действует до конца месяца!"]}
                            styles={{ px: "2", py: "1", bg: "brand.303", color: "brand.304", borderRadius: "md", fontWeight: "bold", fontSize: { base: "0.9rem", md: "1.2rem" }, textWrap: "wrap" }}
                        >
                            Специальное предложение действует до конца месяца!
                        </Highlight>


                    </Box>

                    {/* Правая часть - изображения и кнопка */}
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"

                    >
                        <Flex mb="20px" position="relative" gap={"10"}>
                            <Image
                                src="/img/infographics/forklift.png"
                                maxW="140px"
                                zIndex="2"
                                transform="rotate(-10deg)"
                                scale="auto" scaleX="-1"

                            />
                            <Image
                                src="/img/infographics/mini-excavator.png"
                                maxW="160px"
                                ml="-40px"
                                zIndex="1"
                                transform="rotate(-10deg)"

                            />
                        </Flex>
                        <Dialog.Root open={dialogOpen} onOpenChange={(e) => setDialogOpen(e.open)}>
                            <Dialog.Trigger asChild>
                                <Button
                                    size="lg"
                                    bg="brand.303"

                                    _hover={{ bg: "brand.305", transform: "scale(1)" }}
                                    _active={{ transform: "scale(0.95)" }}
                                    fontSize={{ base: "0.9rem", md: "1.2rem" }}
                                    borderRadius="md"
                                    boxShadow="lg"
                                    transition="all 0.3s"
                                >
                                    Получить выгодное предложение
                                </Button>
                            </Dialog.Trigger>
                            <Portal>
                                <Dialog.Backdrop />
                                <Dialog.Positioner>
                                    <SpecialLeaseForm
                                        onSubmit={handleSubmit(onSubmit)}
                                        isLoading={isLoading}
                                        register={register}
                                        errors={errors}
                                        isDirty={isDirty}
                                        isValid={isValid}

                                    />
                                </Dialog.Positioner>
                            </Portal>
                        </Dialog.Root>


                        <Text fontSize="0.9rem" mt="10px" textAlign="center" >
                            Бесплатная консультация по лизингу
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </section >
    );
}

export default CallToActionBanner;