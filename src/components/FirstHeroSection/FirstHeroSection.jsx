import './FirstHeroSection.css';
import { Heading, Center, Box, Flex, Stack, Image, Button, Highlight } from '@chakra-ui/react';

function FirstHeroSection() {
    return (
        <section className="firstHeroSection">
            <Center>
                <Heading as="h1" textAlign="center"  lineHeight="1.5" className="firstHeroSection__heading" maxW="850px"  fontSize={{base: "1.5rem", md:"2rem",  lg:"3rem"}} >
                    <Highlight
                        query={["ZOOMLION", "Эффективный"]}
                        styles={{px: "1", bg: "brand.303", color: "brand.302"}} 
                    >
                        Инвестируйте в Эффективный рост вместе с техникой ZOOMLION от ГК  Вертикаль
                
                    </Highlight>
                </Heading>
            </Center>
            <Box>
                <Flex justify={{ base: "center", md: "space-between" }} align="center">
                    <Stack className="firstHeroSection__imageWrapper" display={{ base: "none", md: "block" }}>
                        <Image className="img-HeroSection1-left big" src="/img/forklift/fd50.png" />
                        <Image className="img-HeroSection1-left medium" src="/img/forklift/fd20h.png" />
                        <Image className="img-HeroSection1-left small" src="/img/forklift/fb35z.png" />
                    </Stack>
                    <Button asChild marginTop={"10px"} bg="brand.303">
                        <a href="#catalog">Преимущества</a>
                    </Button>
                    <Stack className="firstHeroSection__imageWrapper" display={{ base: "none", md: "block" }}>
                        <Image className="img-HeroSection1-right big" src="/img/excavators/zoomlion_75ga.png" />
                        <Image className="img-HeroSection1-right medium" src="/img/excavators/zoomlion_ze26gu.png" />
                        <Image className="img-HeroSection1-right small" src="/img/excavators/zoomlion_36g.png" />

                    </Stack>
                </Flex>
            </Box>
        </section>
    )
};

export default FirstHeroSection;