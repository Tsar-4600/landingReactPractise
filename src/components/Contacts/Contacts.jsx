import { Button, Heading, Input, Stack, Box, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Отправленные данные:", data);
    // Здесь можно добавить отправку на сервер
  };

  // Валидация номера телефона
  const validatePhone = (value) => {
    const phoneRegex = /^[0-9\-\+]{9,15}$/;
    return phoneRegex.test(value) || "Номер должен содержать 9-15 цифр";
  };

  return (
    <Box maxW="container.sm" mx="auto" p={4}>
      <Heading as="h2" mb={6} textAlign="center">
        Контакты
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} maxW="md" mx="auto">
          {/* Поле телефона */}
          <Box>
            <Text as="label" htmlFor="phone" display="block" mb={1} fontWeight="medium">
              Номер телефона
            </Text>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              variant="filled"
              {...register("phone", {
                required: "Обязательное поле",
                validate: validatePhone,
              })}
            />
            {errors.phone && (
              <Text color="red.500" fontSize="sm" mt={1}>
                {errors.phone.message}
              </Text>
            )}
          </Box>

          {/* Поле имени */}
          <Box>
            <Text as="label" htmlFor="name" display="block" mb={1} fontWeight="medium">
              Ваше имя
            </Text>
            <Input
              id="name"
              type="text"
              placeholder="Иван Иванов"
              variant="filled"
              {...register("name", {
                required: "Обязательное поле",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
              })}
            />
            {errors.name && (
              <Text color="red.500" fontSize="sm" mt={1}>
                {errors.name.message}
              </Text>
            )}
          </Box>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            mt={4}
            isLoading={false} // Можно включить при отправке
          >
            Отправить
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Contacts;