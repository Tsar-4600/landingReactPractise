import { Heading, Grid, GridItem, Image, Text, Box, Button, Popover, Portal, Highlight } from "@chakra-ui/react";
import Zoom from 'react-medium-image-zoom'
import { useState } from "react"
function ThirdHeroSection() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <section id="thirdHeroSection">
            <Heading paddingBottom="25px" as="h2" fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }} lineHeight={1} textAlign={"right"}>Маленькие и мини экскаваторы</Heading>
            <Grid templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}>
                <GridItem colSpan={1}>
                    <Grid templateRows={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={5}>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Zoom>
                                <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            </Zoom>
                            <Box><Text textAlign={"center"} >Прочные рабочие узлы</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Zoom>
                                <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            </Zoom>

                            <Box><Text textAlign={"center"}>Повышенная долговечность конструкции</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Zoom>
                                <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            </Zoom>
                            <Box><Text textAlign={"center"}>Переоборудуемость для различных подвесок</Text></Box>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem
                    colSpan={3}
                    position="relative"
                    minH={{ base: "300px", md: "400px", lg: "500px" }}
                    display="grid"
                    gridTemplateColumns={{ base: "repeat(6, 1fr)", md: "repeat(12, 1fr)" }}
                    gridTemplateRows={{ base: "repeat(4, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(10, 1fr)" }}

                    gap={4}
                    alignItems="center"
                    justifyContent="center"
                    bgImage="url('/img/excavators/zoomlion_36g.png')"
                    bgSize="contain"
                    bgPosition="center"
                    bgRepeat="no-repeat"

                >

                    <Box className="heroSection3__advantage" gridColumn={{ base: "3", sm: "2", md: "4", lg: "4" }} gridRow={{ base: "1", sm: "1", md: "1", lg: "1", xl: "2" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open1} onOpenChange={(e) => setOpen1(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm"  >
                                    1
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>
                                            <Highlight
                                                query={["Load-sensing гидравлика.", "Экономия топлива", "8%"]}
                                                styles={{ px: "0.5", bg: "brand.303", color: "brand.302" }}
                                            >
                                                Load-sensing гидравлика.
                                                Датчики нагрузки подают в насос ровно столько давления и объёма масла, сколько требует конкретное движение.
                                                Меньше потерь энергии, выше точность и отзывчивость на рычаги управления.
                                                Экономия топлива до 8% по сравнению с гидравликой с фиксированным расходом.
                                            </Highlight>
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>

                    <Box className="heroSection3__advantage" gridColumn={{ base: "6", sm: "4", md: "11", xl: "11" }} gridRow={{ base: "2", sm: "3", md: "5", lg: "3", xl: "5" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open2} onOpenChange={(e) => setOpen2(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid" >
                                    2
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>
                                            <Highlight
                                                query={["Kubota", "Yanmar", "высоким КПД", "Common Rail"]}
                                                styles={{ px: "0.5", bg: "brand.303", color: "brand.302" }}
                                            >
                                                Современные дизельные двигатели Stage III/IV.
                                                Используются моторы Kubota или Yanmar с высоким КПД и точной подачй топливы через электронный впрыск Common Rail.
                                            </Highlight>
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>

                    <Box className="heroSection3__advantage" gridColumn={{ base: "5", sm: "3", md: "8", lg: "9" }} gridRow={{ base: "2", sm: "3", md: "6", lg: "3", xl: "6" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open3} onOpenChange={(e) => setOpen3(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid" >
                                    3
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>
                                            <Highlight
                                                query={["Маневренность", "Zero Tail Swing"]}
                                                styles={{ px: "0.5", bg: "brand.303", color: "brand.302" }}
                                            >
                                                Маневренность в стесненных условиях, благодаря укороченной задней части дизайна Zero Tail Swing
                                            </Highlight>

                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>
                    <Box className="heroSection3__advantage" gridColumn={{ base: "1", md: "2", lg: "2" }} gridRow={{ base: "2", sm: "3", md: "7", lg: "4", xl: "7" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open4} onOpenChange={(e) => setOpen4(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid" >
                                    4
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>

                                            <Highlight
                                                query={["быстрее выгружать", "Оптимизированные углы"]}
                                                styles={{ px: "0.5", bg: "brand.303", color: "brand.302" }}
                                            >
                                                Кинематика стрелы и ковша. Оптимизированные углы поворота и подъема позволяют быстрее выгружать материал без лишних движений
                                            </Highlight>
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>
                    <Box className="heroSection3__advantage" gridColumn={{ base: "5", sm: "3", md: "9", lg: "9" }} gridRow={{ base: "1", sm: "2", md: "4", lg: "4" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open5} onOpenChange={(e) => setOpen5(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid" >
                                    5
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>

                                            <Highlight
                                                query={["ROFS/FOPS", "комфорт и безопасность"]}
                                                styles={{ px: "0.5", bg: "brand.303", color: "brand.302" }}
                                            >
                                                Кабины ROFS/FOPS, подвесные кресла, визуальный дисплей, кондиционер это комфорт и безопасность на высоком уровне
                                            </Highlight>
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>
                    <Button gridColumn={{ base: " 3 / span 2", md: "5 / span 4", lg: " 5 / span 4" }} gridRow={{ base: "3", sm: "4", md: "8", lg: "10" }} asChild bg="brand.303" >
                        <a href="#catalog">В каталог</a>
                    </Button>
                </GridItem>

                <GridItem colSpan={1}>
                    <Grid templateRows="repeat(2, 1fr)">
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Zoom>
                                <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            </Zoom>
                            <Box><Text textAlign={"center"}>Расширенная опорная база дает стабилизацию и равномерный износ</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Zoom>
                                <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            </Zoom>
                            <Box><Text textAlign={"center"}>Встроенный GPS для безопасности</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Zoom>
                                <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            </Zoom>
                            <Box><Text textAlign={"center"}>Одновременность копания, поворачивания и перемещения</Text></Box>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </section>
    );
};
export default ThirdHeroSection;