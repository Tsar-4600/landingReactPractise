import {Heading, Box, Image, Grid, GridItem} from "@chakra-ui/react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function ServiceAdvantage() {
    return (
        <>
            <Heading as="h2" fontSize={{base: "1.5rem", md:"2rem", lg:"3rem"}} lineHeight={1}  textAlign={"right"} >
                Выездные Бригады
            </Heading>
            <Grid templateColumns={{base: "repeat(4, 1fr)"}} templateRows={{base: "repeat(2, 1fr)"}}  >
                <GridItem  colSpan={1} rowSpan={2} >
                    <Zoom>
                        <Image objectFit={"cover"} src="/img/default.jpg" />
                    </Zoom>
                </GridItem>
                <GridItem colSpan={2} maxH="230px" overflow={"hidden"} >
                    <Zoom>
                        <Image objectFit="fill"  src="/img/default.jpg" />
                    </Zoom>
                </GridItem>
                <GridItem  maxH="230px">
                    <Zoom>
                        <Image  src="/img/default.jpg" />
                    </Zoom>
                </GridItem>
                <GridItem colSpan={1} maxH="230px" >
                    <Zoom>
                        <Image  src="/img/default.jpg" />
                    </Zoom>
                </GridItem>
                 <GridItem maxH="230px">
                    <Zoom>
                        <Image src="/img/default.jpg" />
                    </Zoom>
                </GridItem>
                 <GridItem>
                    <Zoom>
                        <Image src="/img/default.jpg" />
                    </Zoom>
                </GridItem>
             
            </Grid>
        </>

    )
}

export default ServiceAdvantage;