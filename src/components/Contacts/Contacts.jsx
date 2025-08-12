import { Button, Heading, Input, Stack } from "@chakra-ui/react"

import { useForm } from "react-hook-form";

function Contacts() {

    //form
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <section>
            <Heading as="h2">Контакты</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack maxW="320px">
                    {/* register your input into the hook by invoking the "register" function */}
                    <Input variant="subtitle" defaultValue="test" {...register("example")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <Input variant="subtitle" {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <Button type="submit" variant={"solid"}>Отправить</Button>
                </Stack>

            </form>
        </section>
    );
}

export default Contacts;