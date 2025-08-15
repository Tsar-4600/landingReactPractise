import {Heading} from "@chakra-ui/react";
import Gallery from "./aboutComponents/Gallery/Gallery";
function About(){
    return(
        <section>
            <Heading as="h2" fontSize={{base: "1.5rem", md:"2rem", lg:"3rem"}} lineHeight={1}>О нас</Heading>
            <Gallery/>
        </section>
    )
        
    
}

export default About;