import { Box, Text, Flex, Button, Highlight, Image, Heading } from "@chakra-ui/react";
function CallToActionBanner() {
    return (
        <section>
            <Box bg="brand.305"
                borderRadius={"lg"}
                minH="150px;"
                color="brand.302"
                padding="20px"


            >
                <Heading as="h2" fontSize={{base: "1.5rem", md:"2rem", lg:"3rem"}} lineHeight={1}>
                    <Highlight
                        query={["ZOOMLION"]}
                        styles={{ px: "0.5", bg: "brand.303", color: "brand.304" }}
                    >СПЕЦПРЕДЛОЖЕНИЕ! Техника ZOOMLION в лизинг от 21%
                    </Highlight>
                </Heading>
                <Flex alignItems="center" wrap="wrap" justifyContent={ {base:"center", md:"space-between"}}>
                    <Flex direction={"column"}>
                        <Text fontSize="1.5rem">
                            Сопровождение сделки без скрытых платежей
                        </Text>
                        <Text fontSize="1.5rem">
                            Сопровождение сделки без скрытых платежей
                        </Text>
                        <Text fontSize="1.5rem">
                            Сопровождение сделки без скрытых платежей
                        </Text>
                        <Text fontSize="1.5rem">
                            Сопровождение сделки без скрытых платежей
                        </Text>

                    </Flex>
                    <Flex direction={{base: "column", lg: "row"}} alignItems={"center"} justifyContent={"center"}>
                        <Image src="/img/infographics/forklift.png" maxW="200px" />
                        <Button variant="solid" bg="brand.303" alignSelf={"center"}>Заказать консультацию</Button>
                        <Image src="/img/infographics/mini-excavator.png" maxW="200px" scale="auto" scaleX="-1" />
                    </Flex>

                </Flex>


            </Box>
        </section>

    );


}
export default CallToActionBanner;