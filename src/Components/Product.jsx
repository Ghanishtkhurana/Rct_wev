import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";


function ProductPage({ id, avatar, title, rating, price }) {
 
  return (
    <Link to={`/product/${id}`}>
      <Flex
        direction={"column"}
        border="1px"
        borderColor="gray.200"
        borderRadius="10px"
        m={1}
        alignItems="center"
      >
        <Image h="250px" width="260px" className="img" src={avatar} />
        <Box mb={2} overflow="hidden" w="190px" h="50px" p={2}>
          <Text fontSize="13px">{title}</Text>
        </Box>
        <Flex mb={2}>
          <Text fontWeight={600} pr={1} color={"rgb(221,2,133)"}>
            ₹ {price}
          </Text>
          <Text pl={1} color={"teal"}>
            ☆{rating}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-around" mb={5}>
          <Button bgColor={"rgb(221,2,133)"} color="white" >
            <Text>Add To Cart</Text>
          </Button>
          <Button ml={1} mr={1} borderColor="gray.400" height={10} width={10}>
            <FavoriteIcon />
          </Button>
        </Flex>
      </Flex>
    </Link>
  );
}

export default ProductPage;
