import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Box } from "@chakra-ui/react";

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
        arrows: false,
    };
    return (
        <Box width="100%" maxW={{ base: "200px", sm: "370px", md: "450px", lg:"600px"}}>
            <Slider {...settings}>
                {[...Array(6)].map((_, index) => ( // Or replace with your images
                    <div key={index}>
                        <Image src={`/img/forklift/fd50.png`} />
                        
                    </div>
                ))}
            </Slider>
        </Box>
    );
}

export default SimpleSlider;