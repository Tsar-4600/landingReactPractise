import { Heading, Grid, GridItem, Image, Text, Box, Button, Popover, Portal, Highlight } from "@chakra-ui/react";
import { useState } from "react"
function SecondHeroSection() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);



    return (
        <section>
            <Heading paddingBottom="25px" as="h2">Вилочные погрузчики</Heading>
            <Grid templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}>
                <GridItem colSpan={1}>
                    <Grid templateRows={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={5}>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text textAlign={"center"}>Глобальная и быстрая поставка запчастей </Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text textAlign={"center"}>Многоступенчатая проверка качества на заводах Zoomlion</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text textAlign={"center"}>Крепкая сервисная база</Text></Box>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem
                    colSpan={3}
                    position="relative"
                    minH={{ base: "300px", md: "400px", lg: "500px" }}
                    display="grid"
                    gridTemplateColumns={{ base: "repeat(12, 1fr)" }}
                    gridTemplateRows={{ base: "repeat(3, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(10, 1fr)" }}

                    gap={4}
                    alignItems="center"
                    justifyContent="center"
                    bgImage="url('/img/forklift/fd20h.png')"
                    bgSize="contain"
                    bgPosition="center"
                    bgRepeat="no-repeat"

                >

                    <Box className="heroSection2__advantage" gridColumn={{ base: "5" }} gridRow={{ base: "7" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open1} onOpenChange={(e) => setOpen1(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid">
                                    1
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>
                                            Прочная мачта и обзорность. Широкие швеллеры, опция двойного цилиндра
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>

                    <Box className="heroSection2__advantage" gridColumn={{ base: "8" }} gridRow={{ base: "7" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open2} onOpenChange={(e) => setOpen2(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid">
                                    2
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>
                                            LiFePO₄ аккумуляторы Опция с IP67, BMS, работа до –20 °C
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>

                    <Box className="heroSection2__advantage" gridColumn={{ base: "9" }} gridRow={{ base: "5" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open3} onOpenChange={(e) => setOpen3(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid">
                                    3
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>
                                            Энергоэффективность, низкие  Эксплутационные расходы СТО

                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>
                    <Box className="heroSection2__advantage" gridColumn={{ base: "5" }} gridRow={{ base: "3" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open4} onOpenChange={(e) => setOpen4(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid">
                                    4
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>
                                            Шарниры, не требующие смазки
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>
                    <Box className="heroSection2__advantage" gridColumn={{ base: "7" }} gridRow={{ base: "5" }} zIndex={1} textAlign="center">
                        <Popover.Root open={open5} onOpenChange={(e) => setOpen5(e.open)}>
                            <Popover.Trigger asChild>
                                <Button size="sm" variant="solid">
                                    5
                                </Button>
                            </Popover.Trigger>
                            <Portal>
                                <Popover.Positioner>
                                    <Popover.Content>
                                        <Popover.Arrow />
                                        <Popover.Body>

                                            <Highlight
                                                query={["Swing-out", "LED Curtis"]}
                                                styles={{ px: "0.5", bg: "brand.303" }}
                                            >
                                                Удобный доступ и эргономика. Swing-out панели, LED Curtis, простая диагностика
                                            </Highlight>
                                            
                                        </Popover.Body>
                                    </Popover.Content>
                                </Popover.Positioner>
                            </Portal>
                        </Popover.Root>
                    </Box>


                    <Button gridColumn={{ base: " 5 / span 4" }} gridRow={{ base: "3", md: "8", lg: "10" }} asChild>
                        <a href="#catalog">В каталог</a>
                    </Button>
                </GridItem>

                <GridItem colSpan={1}>
                    <Grid templateRows="repeat(2, 1fr)" gap={5}>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text textAlign={"center"} >Широкая линейка под любые задачи</Text ></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text textAlign={"center"}>Современные экологичные технологии</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center" gap={2}>
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text textAlign={"center"}>Простое и удобное управление</Text></Box>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </section>
    );
};
export default SecondHeroSection;