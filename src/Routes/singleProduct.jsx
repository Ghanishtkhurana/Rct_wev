import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Spacer,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SpaceBar } from "@mui/icons-material";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Footer from "../Components/Footer";
import { cartContext } from "../context/cartContext";

const getSingleData = ({ id }) => {
  return axios(`https://khurana123.herokuapp.com/data/${id}`);
};

function SingleProductpage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { cart, setCart } = useContext(cartContext);

  const handleTheCart = (data) => {

    setCart([...cart, data]);
  };

  console.log(cart);

  useEffect(() => {
    handleTheFetch(id);
  }, []);

  const handleTheFetch = (id) => {
    getSingleData({ id }).then((res) => setData(res.data));
  };
  return (
    <Box bg={"rgb(249,249,249)"}>
      <Navbar />
      <Center>
        <Flex gap="4" mt={6}>
          <Box>
            <Image src={data.avatar} boxSize="400" />
          </Box>

          <Flex
            bg={"white"}
            direction={"column"}
            width="700px"
            textAlign="left"
            p={5}
          >
            <Text color="gray.600" fontWeight={700}>
              {data.Title}
            </Text>
            <Spacer />
            <Flex color={"rgb(221,2,133)"}>
              <Text fontWeight={700} mr={1}>
                <CheckIcon fontSize="small" />
              </Text>
              <Text fontWeight={700}>In Stock</Text>
            </Flex>
            <Spacer />

            <Flex>
              <Text mr={4} fontWeight={700}>
                {" "}
                <strike>₹ {data.Price + 100}</strike>{" "}
              </Text>
              <Text mr={4} color={"rgb(221,2,133)"} fontWeight={700}>
                ₹ {data.Price}
              </Text>
              <Text mr={4} fontWeight={700} color="green.600">
                15% OFF
              </Text>
            </Flex>
            <Text color="gray.400" fontWeight={600}>
              (Inclusive of all Taxes)
            </Text>
            <Spacer />

            <Flex alignItems="center">
              <Button bgColor={"rgb(221,2,133)"} onClick={()=>handleTheCart(data)} color="white" mr={2}>
                <label>
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </label>{" "}
                <Text> Add To Cart</Text>
              </Button>
              <Button ml={1} mr={1} height={10} width={10} bg={"gray.100"}>
                <FavoriteIcon />
              </Button>
            </Flex>
            <Spacer />

            <Flex>
              <Flex
                p={2}
                width="350px"
                textAlign="center"
                borderRadius="10px"
                mt="10px"
                mr="10px"
                bg={"rgb(241, 241, 241)"}
              >
                <Text mt={1} mr={2}>
                  <AddModeratorOutlinedIcon />
                </Text>{" "}
                100% GENUINE PRODUCT
              </Flex>

              <Flex
                p={2}
                width="350px"
                textAlign="center"
                borderRadius="10px"
                mt="10px"
                mr="10px"
                bg={"rgb(241, 241, 241)"}
              >
                <Text mt={1} mr={2}>
                  <KeyboardReturnOutlinedIcon />
                </Text>{" "}
                EASY RETURN POLICY
              </Flex>
            </Flex>
            <Spacer />
          </Flex>
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
}

export default SingleProductpage;
