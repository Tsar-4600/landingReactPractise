import  './FirstHeroSection.css';
import { Heading, Center, Box, Flex, Stack, Image, Button} from '@chakra-ui/react';

function FirstHeroSection() {
    return(
        <section className="firstHeroSection">
            <Center><Heading as="h1" textAlign="center" fontSize="3rem" lineHeight="1.5" className="firstHeroSection__heading" >Инвестируйте в Эффективный рост вместе<br/>с техникой Zoomlion<br/>от ГК  Вертикаль</Heading></Center>
            <Box>
                <Flex justify="space-between" align="center">
                    <Stack  className="firstHeroSection__imageWrapper">
                        <Image className="img-HeroSection1-left big" src="/img/forklift/fd50.png"/>
                        <Image className="img-HeroSection1-left medium" src="/img/forklift/fd20h.png"/>
                        <Image className="img-HeroSection1-left small" src="/img/forklift/fb35z.png"/>
                    </Stack>
                    <Button asChild>
                        <a href="#catalog">Преимущества</a>
                    </Button>
                    <Stack className="firstHeroSection__imageWrapper" >
                        <Image className="img-HeroSection1-right big" src="/img/excavators/zoomlion_75ga.png"/>
                        <Image className="img-HeroSection1-right medium" src="/img/excavators/zoomlion_ze26gu.png"/>
                        <Image className="img-HeroSection1-right small" src="/img/excavators/zoomlion_36g.png"/>
                       
                    </Stack>
                </Flex>
            </Box>
        </section>
    )
};

export default FirstHeroSection;