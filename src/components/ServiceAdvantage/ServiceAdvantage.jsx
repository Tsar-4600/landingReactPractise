import { Heading, Box, Image, Grid, GridItem, Span, Button, Center } from "@chakra-ui/react";



function ServiceAdvantage() {
    return (

        <Box as="section">
            <Heading
                as="h2"
                fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                lineHeight={1}
                textAlign="right"
                mb={6}
            >
                Выездные Бригады
            </Heading>
            <Grid templateColumns={{ base: "1, 1fr", md: "repeat(2, 1fr)" }} gap={5} marginBottom={5} alignItems={"center"} justifyItems={"center"} paddingBottom="20px">
                <GridItem fontSize={{base: "1rem", md:"1.2rem"}}>
                    <Span>Ваша техника — под надежным контролем! Регулярное техобслуживание и оперативная помощь при неожиданных поломках — мы обеспечиваем бесперебойную работу вашей техники. Предупредите проблемы до их появления или вызовите бригаду для срочного ремонта — мы всегда на связи!</Span>

                </GridItem>
                <GridItem>
                  
                        <Button size={"xl"} variant={"solid"} bg={"brand.303"} color={"brand.304"}  w={ {base: "290px", md: "400px"}}>Позвонить</Button>
                    
                </GridItem>
            </Grid>

            <Grid
                templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(4, 1fr)" }}
                templateRows={{ base: "repeat(5, 200px)", md: "repeat(2, 300px)" }}
                gap={3}
                width="100%"
            >
                {/* Основное вертикальное изображение (левый столбец) */}
                <GridItem
                    colSpan={{ base: 4, md: 1 }}
                    rowSpan={{ base: 1, md: 2 }}
                >
                    <Image
                        src="/img/autoservice/moving-autoservice2.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Выездная бригада"
                    />
                </GridItem>

                {/* Первая горизонтальная пара изображений */}
                <GridItem colSpan={{ base: 4, md: 2 }} rowSpan={1}>
                    <Image
                        src="/img/autoservice/moving-autoservice1.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="выездные бригады"
                    />
                </GridItem>

                <GridItem colSpan={{ base: 4, md: 1 }} rowSpan={2}>
                    <Image
                        src="/img/autoservice/moving-autoservice4.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="выездные бригады"
                    />
                </GridItem>

                {/* Вторая горизонтальная пара изображений */}
                <GridItem colSpan={{ base: 4, md: 1 }} rowSpan={1}>
                    <Image
                        src="/img/autoservice/moving-autoservice3.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="выездные бригады"
                    />
                </GridItem>
                <GridItem colSpan={{ base: 4, md: 1 }} rowSpan={1}>
                    <Image
                        src="/img/autoservice/moving-autoservice5.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="выездные бригады"
                    />
                </GridItem>
            </Grid>
        </Box>

    )
}

export default ServiceAdvantage;