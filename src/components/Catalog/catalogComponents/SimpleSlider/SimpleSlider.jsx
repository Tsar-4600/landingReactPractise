import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Box, Center, Spinner } from "@chakra-ui/react";

function SimpleSlider({ images =[]}) { // Значение по умолчанию пустой массив
    
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

    const handleImageError = (index) => {
        console.error(`Не удалось загрузить изображение ${index + 1}`);
    };

    // Если images не загружены (undefined или null)
    if (!images) {
        return (
            <Center h="200px">
                <Spinner />
            </Center>
        );
    }

    // Если массив images пустой
    if (images.length === 0) {
        return (
            <Center h="200px" bg="gray.100" borderRadius="md">
                Нет доступных изображений
            </Center>
        );
    }

    return (
        <Box width="100%" maxW={{ base: "200px", sm: "370px", md: "450px", lg: "600px" }}>
            <Slider {...settings}>
                {images.map((src, index) => (
                 
                    <Box as="div" key={index}>
                        <Image
                            src={src}
                            alt={`Изображение ${index + 1}`}
                            onError={() => handleImageError(index)}
                            loading="lazy"
                        
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default SimpleSlider;