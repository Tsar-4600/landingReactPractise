
import { Box, Text, Flex, Image, Grid, GridItem, Center, List } from "@chakra-ui/react"
import Zoom from 'react-medium-image-zoom'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-medium-image-zoom/dist/styles.css'
function Gallery() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} paddingTop="1.5rem" gap="5">
            <GridItem fontSize={{ base: "1rem", md: "1.2rem" }}>
                <Text>Начиная свой путь как субдилеры, мы работали с техникой Zoomlion через партнеров, постепенно укрепляя свою репутацию на рынке.</Text>
                <Text>Благодаря надежности, профессионализму команды и растущему кругу партнеров нам удалось завоевать доверие производителя.</Text>
                <Text> Приобретение статуса официального дилера стало закономерным этапом нашего развития. Этот шаг стал возможен благодаря нескольким ключевым факторам: качественному сервисному обслуживанию клиентов и развитой дилерской сети.</Text>
                <Text>Новый статус подтверждает наш высокий уровень работы и открывает дополнительные возможности.</Text>
                <List.Root paddingLeft={{ base: "1.2rem" }} >
                    <List.Item _marker={{ color: "brand.303" }}>Более выгодные цены за счет прямых контрактов с Zoomlion.</List.Item>
                    <List.Item _marker={{ color: "brand.303" }}>Сокращенные сроки поставки благодаря отлаженной логистике.</List.Item>
                    <List.Item _marker={{ color: "brand.303" }}>Поставки оригинальных запчастей.</List.Item>
                    <List.Item _marker={{ color: "brand.303" }}>Доступ специальным акциям</List.Item>
                </List.Root>
            </GridItem>
            <GridItem>
                <Center>
                    <Box width="100%" maxW={{ base: "200px", sm: "270px", md: "300px", lg: "400px" }}>

                        <Slider {...settings}>
                            <Box>
                                <Zoom>
                                    <Image
                                        alt=""
                                        src="/img/dealerForkLiftGk.png"

                                    />
                                </Zoom>
                            </Box>
                            <Box>
                                <Zoom>
                                    <Image
                                        alt=""
                                        src="/img/specTechSnabAvtokrane.png"
                                    />
                                </Zoom>
                            </Box>
                            <Box>
                                <Zoom>
                                    <Image
                                        alt=""
                                        src="/img/subdealerGK2.jpg"

                                    />

                                </Zoom>
                            </Box>

                        </Slider>

                    </Box >
                </Center>
            </GridItem>
        </Grid>
    )
}
export default Gallery;