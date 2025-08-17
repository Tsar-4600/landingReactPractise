import { Heading, Box, Image, Grid, GridItem,  Span} from "@chakra-ui/react";
import Zoom from 'react-medium-image-zoom'


function ServiceAdvantage() {
    return (

        <Box>
            <Heading
                as="h2"
                fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                lineHeight={1}
                textAlign="right"
                mb={6}
            >
                Выездные Бригады
            </Heading>
            <Grid templateColumns={{base: "1, 1fr", md: "repeat(2, 1fr)"}} gap={5}>
                <GridItem>
                    <Span>Ваша техника — под надежным контролем! Регулярное техобслуживание и оперативная помощь при неожиданных поломках — мы обеспечиваем бесперебойную работу вашего оборудования. Предупредите проблемы до их появления или вызовите бригаду для срочного ремонта — мы всегда на связи!</Span>
                   
                </GridItem>
                <GridItem>
                    <Span>Ваша техника — под надежным контролем! Регулярное техобслуживание и оперативная помощь при неожиданных поломках — мы обеспечиваем бесперебойную работу вашего оборудования. Предупредите проблемы до их появления или вызовите бригаду для срочного ремонта — мы всегда на связи!</Span>
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
                        src="/img/default.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Выездная бригада"
                    />
                </GridItem>

                {/* Первая горизонтальная пара изображений */}
                <GridItem colSpan={{ base: 4, md: 2 }} rowSpan={1}>
                    <Image
                        src="/img/default.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Рабочий процесс"
                    />
                </GridItem>

                <GridItem colSpan={{ base: 4, md: 1 }} rowSpan={2}>
                    <Image
                        src="/img/default.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Оборудование"
                    />
                </GridItem>

                {/* Вторая горизонтальная пара изображений */}
                <GridItem colSpan={{ base: 4, md: 1 }} rowSpan={1}>
                    <Image
                        src="/img/default.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Специалисты"
                    />
                </GridItem>
                <GridItem colSpan={{ base: 4, md: 1 }} rowSpan={1}>
                    <Image
                        src="/img/default.jpg"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Специалисты"
                    />
                </GridItem>
            </Grid>
        </Box>

    )
}

export default ServiceAdvantage;