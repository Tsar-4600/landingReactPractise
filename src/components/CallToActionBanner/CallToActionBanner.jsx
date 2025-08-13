import { Box, Text, Flex, Button, Highlight } from "@chakra-ui/react";
function CallToActionBanner() {
    return (
        <section>
            <Box bg="brand.305" borderRadius={"sm"} minH="150px;" color="brand.302" padding="20px">
                <Text fontSize="3rem">
                    <Highlight
                        query={["ZOOMLION"]}
                        styles={{ px: "0.5", bg: "brand.303", color: "brand.304" }}
                    >СПЕЦПРЕДЛОЖЕНИЕ! Техника ZOOMLION в лизинг от 21%
                    </Highlight>
                </Text>
                <Flex alignItems="center" wrap="wrap">
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
                    <Button variant="solid" bg="brand.303" alignSelf={"center"}>Заказать консультацию</Button>
                </Flex>

                
            </Box>
        </section>

    );


}
export default CallToActionBanner;