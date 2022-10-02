import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";

const getData = () => {
  return axios("https://khurana123.herokuapp.com/data");
};

function ProductSlider() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    handleTheFetch();
  }, []);

  const handleTheFetch = () => {
    getData().then((res) => setProduct(res.data));
  };

  console.log("Product=>", product);

  return (
    <Box className="slider">
      <Box className="slide-track">
        {product.map((user) => (
          <NavLink to={`/product/${user.id}`}  >
          <Flex
            direction={"column"}
            className="slide"
            border="1px"
            borderColor="gray.400"
            key={user.id}
            m={1}
          >
            <Image h="200px" width={900} className="img" src={user.avatar} />
            <Box mb={2} overflow="hidden" w="190px" h="50px" p={2}>
              <Text fontSize="13px">{user.Title}</Text>
            </Box>
            <Flex mb={2}>
              <Text fontWeight={600} pr={1} color={"rgb(221,2,133)"}>
                ₹ {user.Price}
              </Text>
              <Text pl={1} color={"teal"}>
                ☆{user.Rating}
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-around">
              <Button bgColor={"rgb(221,2,133)"} color="white">
                <Text>Add To Cart</Text>
              </Button>
              <Button
                ml={1}
                mr={1}
                borderColor="gray.400"
                variant={"outline"}
                bg="white"
                height={10}
                width={10}
              >
                <FavoriteIcon />
              </Button>
            </Flex>
          </Flex>
            </NavLink>
        ))}
      </Box>
    </Box>
  );
}

export default ProductSlider;
