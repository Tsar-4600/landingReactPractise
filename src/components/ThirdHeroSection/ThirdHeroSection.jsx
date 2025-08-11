import { Heading, Grid, GridItem, Image, Text, Box, Button } from "@chakra-ui/react";

function ThirdHeroSection() {
    return (
        <section>
            <Heading paddingBottom="25px" as="h2">Маленькие и мини экскаваторы</Heading>
            <Grid templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }}>
                <GridItem colSpan={1}>
                    <Grid templateRows={{ base: "1fr", lg: "repeat(2, 1fr)" }}>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center">
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text>lorem loremloremloremloreorem</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center">
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text>lorem loremloremloremloreorem</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center">
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text>lorem loremloremloremloreorem</Text></Box>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem
                    colSpan={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Image
                        fit="contain"
                        src="/img/excavators/zoomlion_36g.png"
                        maxW="100%"
                        maxH="100%"
                    />
                    <Button asChild>
                        <a href="#catalog">В каталог</a>
                    </Button>
                </GridItem>
                <GridItem colSpan={1}>
                    <Grid templateRows="repeat(2, 1fr)">
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center">
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text>lorem loremloremloremloreorem</Text></Box>
                        </GridItem>
                        <GridItem textStyle="lg" display="flex" flexDirection="column" alignItems="center">
                            <Image rounded="full" w="128px" h="128px" src="/img/default.jpg" />
                            <Box><Text>lorem loremloremloremloreoremsdfsdfsfdsfs</Text></Box>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </section>
    );
};
export default ThirdHeroSection;