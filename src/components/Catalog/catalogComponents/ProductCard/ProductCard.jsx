import {
  Button, Card, Image, Text, Grid, CloseButton, Dialog, Portal,
  Accordion, Box, Flex, Center, Heading, // если используешь Span из Chakra v3 — оставь:
  Span,
} from "@chakra-ui/react";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

const ProductCard = ({ product }) => {
  // безопасно работаем со спецификациями
  const specs = Array.isArray(product?.specifications) ? product.specifications : [];

  // Группируем характеристики по категориям
  const groupedSpecs = specs.reduce((acc, spec) => {
    const [category, ...rest] = String(spec).split(":");
    const value = rest.join(":");
    if (!acc[category]) acc[category] = [];
    acc[category].push(value);
    return acc;
  }, {});

  // Элементы аккордеона
  const accordionItems = Object.entries(groupedSpecs).map(([title, items]) => ({
    value: title,
    title,
    text: (
      <Box>
        {items.map((item, i) => (
          <Flex key={i} justifyContent="space-between" marginBottom="2">
            <Span>{item.split(":")[0]}</Span>
            <Span>{item.split(":").slice(1).join(":")}</Span>
          </Flex>
        ))}
      </Box>
    ),
  }));

  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={`/img/forklift/${product.model.toLowerCase()}/1.png`}
        alt={product.name}
      />
      <Card.Body gap="2">
        <Card.Title>{product.name}</Card.Title>
        <Card.Description lineClamp={"4"}>

          {product.description || "Идеальный погрузчик под ваши любые задачи."}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {product.price > 0 ? `${product.price.toLocaleString()} руб.` : "Цена по запросу"}
        </Text>
      </Card.Body>

      <Card.Footer gap="2">
        <Button variant="solid" bg="brand.303">Заказать лизинг</Button>

        <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom" scrollBehavior="inside">
          <Dialog.Trigger asChild>
            <Button variant="ghost">Подробнее</Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title fontSize={{ base: "3xl", md: "5xl" }}>
                    {product.name}
                  </Dialog.Title>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Header>

                <Dialog.Body>
                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                    {/* Left: Slider */}
                    <Center>
                      <Box>
                        <SimpleSlider images={product?.images || []} />
                      </Box>
                    </Center>

                    {/* Right: Specs + Price */}
                    <Box>
                      <Box fontSize="2xl" fontWeight="bold" mb="1.5rem">
                        {product.price > 0 ? `Цена ${product.price.toLocaleString()} руб.` : "Цена по запросу"}
                      </Box>

                      <Heading as="h3" mb="1.25rem">Характеристики</Heading>

                      {Object.entries(groupedSpecs).slice(0, 4).map(([category, items]) => (
                        <Box key={category} mb="4">
                          <Heading as="h4" size="md" mb="2">{category}</Heading>
                          {items.slice(0, 3).map((item, i) => (
                            <Flex key={i} justifyContent="space-between" mb="2">
                              <Span>{item.split(":")[0]}</Span>
                              <Span>{item.split(":").slice(1).join(":")}</Span>
                            </Flex>
                          ))}
                        </Box>
                      ))}

                      <Button variant="solid" bg="brand.303" color="brand.304" mt="1.25rem">
                        Оставить заявку
                      </Button>
                    </Box>
                  </Grid>
                   <Heading as="h3" mb="1.25rem">Описание</Heading>
                    <Box>{product.description}</Box>
                  <Accordion.Root collapsible defaultValue={["b"]} mt="1.25rem">
                   
                    {accordionItems.map((item, index) => (
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
  );
};

export default ProductCard;
