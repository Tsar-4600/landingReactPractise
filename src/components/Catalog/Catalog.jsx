import { Button, Card, Image, Text, Grid, GridItem, CloseButton, Dialog, Portal, Accordion, Span } from "@chakra-ui/react"


function Catalog() {
    const items = [
        { value: "a", title: "First Item", text: "Some value 1..." },
        { value: "b", title: "Second Item", text: "Some value 2..." },
        { value: "c", title: "Third Item", text: "Some value 3..." },
    ];
    return (

        <section id="catalog" className="catalog-section">

            <Grid
                templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
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
                                                <Dialog.Title>Dialog Title</Dialog.Title>
                                                <Dialog.CloseTrigger asChild>
                                                    <CloseButton size="sm" />
                                                </Dialog.CloseTrigger>
                                            </Dialog.Header>
                                            <Dialog.Body>
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
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                </GridItem>
                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                </GridItem>
                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                </GridItem>
                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                </GridItem>
                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                </GridItem>
                <GridItem>
                    <Card.Root maxW="sm" overflow="hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                </GridItem>


            </Grid>
        </section>



    )
}
export default Catalog