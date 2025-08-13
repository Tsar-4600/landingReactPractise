import { Button, Card, Image, Text, Grid, GridItem, CloseButton, Dialog, Portal, Accordion, Span, Box, Flex, Center, Heading } from "@chakra-ui/react"
import SimpleSlider from "./catalogComponents/SimpleSlider/SimpleSlider";


function Catalog() {
    const items = [
        { value: "a", title: "First Item", text: "Some value 1..." },
        { value: "b", title: "Second Item", text: "Some value 2..." },
        { value: "c", title: "Third Item", text: "Some value 3..." },
        { value: "v", title: "fourth Item", text: "Some value 4..." },
    ];
    return (

        <section id="catalog" className="catalog-section">
            <Heading paddingBottom="25px" as="h2">Каталог</Heading>
            <Grid
                templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
                gap={5}
            >
                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="/img/forklift/fd50.png"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Погрузчик FD50</Card.Title>
                            <Card.Description>
                                Идеальный погрузчик под ваши любые задачи.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                14000000 руб.
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid" bg="brand.303">Заказать лизинг</Button>
                            <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                                <Dialog.Trigger asChild>
                                    <Button variant="ghost">Подробнее</Button>
                                </Dialog.Trigger>
                                <Portal>
                                    <Dialog.Backdrop />
                                    <Dialog.Positioner>
                                        <Dialog.Content>
                                            <Dialog.Header>
                                                <Dialog.Title>Погрузчик FD50</Dialog.Title>
                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>
                                            </Dialog.Header>
                                            <Dialog.Body>
                                                <Grid
                                                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                                    gap={4}
                                                >
                                                    {/* Left Side: Slider */}
                                                    <Center><Box>
                                                        <SimpleSlider />
                                                    </Box>
                                                    </Center>
                                                    {/* Right Side: Characteristics and Price */}
                                                    <Box>
                                                        < Box fontSize="2xl" fontWeight="bold" marginBottom="2">14000000 руб.</Box>
                                                        <Flex justifyContent="space-between" flexWrap="wrap" marginBottom="2">
                                                            <Box>Характеристика1</Box>
                                                            <Box>Значение1</Box>
                                                        </Flex>
                                                        <Flex justifyContent="space-between" marginBottom="2">
                                                            <Span>Характеристика2</Span>
                                                            <Span>Значение2</Span>
                                                        </Flex>
                                                        <Flex justifyContent="space-between" marginBottom="2">
                                                            <Span>Характеристика2</Span>
                                                            <Span>Значение2</Span>
                                                        </Flex>
                                                        <Flex justifyContent="space-between" marginBottom="2">
                                                            <Span>Характеристика2</Span>
                                                            <Span>Значение2</Span>
                                                        </Flex>
                                                    </Box>
                                                </Grid>

                                                
                                                <Accordion.Root collapsible defaultValue={["b"]}>
                                                    {items.map((item, index) => (
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
                </GridItem>

                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="/img/forklift/fb35z.png"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Погрузчик FE35</Card.Title>
                            <Card.Description>
                                Идеальный погрузчик под ваши любые задачи.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                10000000 руб.
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Заказать лизинг</Button>
                            <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                                <Dialog.Trigger asChild>
                                    <Button variant="ghost">Подробнее</Button>
                                </Dialog.Trigger>
                                <Portal>
                                    <Dialog.Backdrop />
                                    <Dialog.Positioner>
                                        <Dialog.Content>
                                            <Dialog.Header>
                                                <Dialog.Title>Погрузчик FE35</Dialog.Title>
                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>
                                            </Dialog.Header>
                                            <Dialog.Body>
                                                <Grid
                                                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                                    gap={4}
                                                >
                                                    {/* Left Side: Slider */}
                                                    <Center><Box>
                                                        <SimpleSlider />
                                                    </Box>
                                                    </Center>
                                                    {/* Right Side: Characteristics and Price */}
                                                    <Box>
                                                        < Box fontSize="2xl" fontWeight="bold" marginBottom="2">10000000 руб.</Box>
                                                        <Flex justifyContent="space-between" flexWrap="wrap" marginBottom="2">
                                                            <Span>Характеристика1</Span>
                                                            <Span>Значение1</Span>
                                                        </Flex>
                                                        <Flex justifyContent="space-between" marginBottom="2">
                                                            <Span>Характеристика2</Span>
                                                            <Span>Значение2</Span>
                                                        </Flex>
                                                    </Box>
                                                </Grid>
                                                <Accordion.Root collapsible defaultValue={["b"]}>
                                                    {items.map((item, index) => (
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
                </GridItem>

                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="/img/forklift/fb35z.png"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Погрузчик FE35</Card.Title>
                            <Card.Description>
                                Идеальный погрузчик под ваши любые задачи.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                10000000 руб.
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Заказать лизинг</Button>
                            <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                                <Dialog.Trigger asChild>
                                    <Button variant="ghost">Подробнее</Button>
                                </Dialog.Trigger>
                                <Portal>
                                    <Dialog.Backdrop />
                                    <Dialog.Positioner>
                                        <Dialog.Content>
                                            <Dialog.Header>
                                                <Dialog.Title>Погрузчик FE35</Dialog.Title>
                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>
                                            </Dialog.Header>
                                            <Dialog.Body>
                                                <Grid
                                                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                                    gap={4}
                                                >
                                                    {/* Left Side: Slider */}
                                                    <Center><Box>
                                                        <SimpleSlider />
                                                    </Box>
                                                    </Center>
                                                    {/* Right Side: Characteristics and Price */}
                                                    <Box>
                                                        < Box fontSize="2xl" fontWeight="bold" marginBottom="2">10000000 руб.</Box>
                                                        <Flex justifyContent="space-between" flexWrap="wrap" marginBottom="2">
                                                            <Span>Характеристика1</Span>
                                                            <Span>Значение1</Span>
                                                        </Flex>
                                                        <Flex justifyContent="space-between" marginBottom="2">
                                                            <Span>Характеристика2</Span>
                                                            <Span>Значение2</Span>
                                                        </Flex>
                                                    </Box>
                                                </Grid>
                                                <Accordion.Root collapsible defaultValue={["b"]}>
                                                    {items.map((item, index) => (
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
                </GridItem>

                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="/img/forklift/fb35z.png"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Погрузчик FE35</Card.Title>
                            <Card.Description>
                                Идеальный погрузчик под ваши любые задачи.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                10000000 руб.
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Заказать лизинг</Button>
                            <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                                <Dialog.Trigger asChild>
                                    <Button variant="ghost">Подробнее</Button>
                                </Dialog.Trigger>
                                <Portal>
                                    <Dialog.Backdrop />
                                    <Dialog.Positioner>
                                        <Dialog.Content>
                                            <Dialog.Header>
                                                <Dialog.Title>Погрузчик FE35</Dialog.Title>
                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>
                                            </Dialog.Header>
                                            <Dialog.Body>
                                                <Grid
                                                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                                    gap={4}
                                                >
                                                    {/* Left Side: Slider */}
                                                    <Center><Box>
                                                        <SimpleSlider />
                                                    </Box>
                                                    </Center>
                                                    {/* Right Side: Characteristics and Price */}
                                                    <Box>
                                                        < Box fontSize="2xl" fontWeight="bold" marginBottom="2">10000000 руб.</Box>
                                                        <Flex justifyContent="space-between" flexWrap="wrap" marginBottom="2">
                                                            <Span>Характеристика1</Span>
                                                            <Span>Значение1</Span>
                                                        </Flex>
                                                        <Flex justifyContent="space-between" marginBottom="2">
                                                            <Span>Характеристика2</Span>
                                                            <Span>Значение2</Span>
                                                        </Flex>
                                                    </Box>
                                                </Grid>
                                                <Accordion.Root collapsible defaultValue={["b"]}>
                                                    {items.map((item, index) => (
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
                </GridItem>

                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="/img/excavators/zoomlion_20g.png"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Экскаватор 20g</Card.Title>
                            <Card.Description>
                                Идеальный погрузчик под ваши любые задачи.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                10000000 руб.
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Заказать лизинг</Button>
                            <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                                <Dialog.Trigger asChild>
                                    <Button variant="ghost">Подробнее</Button>
                                </Dialog.Trigger>
                                <Portal>
                                    <Dialog.Backdrop />
                                    <Dialog.Positioner>
                                        <Dialog.Content>
                                            <Dialog.Header>
                                                <Dialog.Title>Погрузчик FE35</Dialog.Title>
                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>
                                            </Dialog.Header>
                                            <Dialog.Body>
                                                <Grid
                                                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                                    gap={4}
                                                >
                                                    {/* Left Side: Slider */}
                                                    <Center><Box>
                                                        <SimpleSlider />
                                                    </Box>
                                                    </Center>
                                                    {/* Right Side: Characteristics and Price */}
                                                    <Box>
                                                        < Box fontSize="2xl" fontWeight="bold" marginBottom="2">10000000 руб.</Box>
                                                        <Flex justifyContent="space-between" flexWrap="wrap" marginBottom="2">
                                                            <Span>Характеристика1</Span>
                                                            <Span>Значение1</Span>
                                                        </Flex>
                                                        <Flex justifyContent="space-between" marginBottom="2">
                                                            <Span>Характеристика2</Span>
                                                            <Span>Значение2</Span>
                                                        </Flex>
                                                    </Box>
                                                </Grid>
                                                <Accordion.Root collapsible defaultValue={["b"]}>
                                                    {items.map((item, index) => (
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
                </GridItem>


            </Grid>
        </section>



    )
}
export default Catalog