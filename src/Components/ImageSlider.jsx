import { Box, Image } from "@chakra-ui/react";

function ImageSlider() {
  return (
    <Box className="ImageContainer">
      <Box className="wrapper" >
        <Image src="https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg" />
        <Image src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg" />
        <Image src="https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg" />
      </Box>
    </Box>
  );
}

export default ImageSlider;
