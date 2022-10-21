import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import { AddBoxSharp } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import SearchFunct from "./SearchFunct";
import axios from "axios";
import styles from "./Search.module.css"
import CloseIcon from '@mui/icons-material/Close';


function getUser({shabd}){
  return axios(`https://khurana123.herokuapp.com/data?_limit=32&q=${shabd}`)
}


function Navbar() {
  const { cart, setCart } = useContext(cartContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [shabd, setShabd] = useState("");

  const handleTheDataLength = ()=>{
    setData([])
  }

  const handleTheLogin = () => {
    // return <Navigate to="/login" />
    console.log("hi");
    navigate("/login");
    // return <Link to="/login"></Link>
  };

  const handleTheRegister = () => {
    console.log("hi2");
    navigate("/register");
    // return <Navigate to="/register" />
  };

  const handleTheFetch = () => {
    getUser({ shabd }).then((res) => setData(res.data));
  };

  const handleTheChange = (e) => {
    // console.log(e.target.value)
    if (e.target.value === "") {
      setData([]);
    } else {
      setShabd(e.target.value);
      handleTheFetch();
    }
  };

  console.log(cart.length);
  return (
    <Box>
      <Image src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" />
      <Flex>
        <Box m={5}>
          <Link to="/">
            <Image
              h="70px"
              w="100%"
              src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
            />
          </Link>
        </Box>
        <Spacer />
        <Flex m={9}>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderColor="gray.400"
              width="250px"
              height="41px"
              borderRadius="md"
              borderWidth="1px"
              fontSize="13px"
              borderRightRadius="0"
            >
              All Categories <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <Link to="/make_up">
                <MenuItem>Make Up</MenuItem>
              </Link>
              <Link to="/skin">
                <MenuItem>Skin</MenuItem>
              </Link>
              <Link to="/hair">
                <MenuItem>Hair</MenuItem>
              </Link>
              <Link to="/ayurveda">
                <MenuItem>Ayurveda</MenuItem>
              </Link>
              <Link to="/personal_care">
                <MenuItem>Personal Care</MenuItem>
              </Link>
              <Link to="/fragnance">
                <MenuItem>Fragnance</MenuItem>
              </Link>
              <Link to="/mom&baby">
                <MenuItem>Mom & Baby Care</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Input
            borderLeftRadius="0"
            borderColor="gray.400"
            fontSize="14px"
            placeholder="Enter your search"
            borderRightRadius="0"
            onInput={handleTheChange}
          />
          <Button onClick={handleTheDataLength} bgColor={"rgb(221,2,133)"} borderLeftRadius="0">
            {data.length===0? <SearchIcon /> : <CloseIcon />}
          </Button>
          {data.length !== 0 && (
            <Box
              mt={10}
              height={300}
              width={502}
            borderRightRadius="0"
              zIndex="1"
              position="absolute"
              border="2px"
              bgColor={"white"}
              borderColor={"gray.200"}
              className={styles.container}
            >
              {data.map((user) => (
                // <li>{user.Title}</li>
                <Flex textAlign="left" mr={5} >
                  <Box bgColor={"white"}
                   borderColor={"gray.200"} width={100} ><Image width={100} height={100} src={user.avatar} /> </Box>
                  <Text fontSize="13px" mt={7} >{user.Title}</Text>
                </Flex>
              ))}
            </Box>
          )}
        </Flex>

        <Spacer />

        <Flex m={9}>
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
          <Spacer />
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  ml={1}
                  mr={1}
                  borderColor="gray.400"
                  variant={"outline"}
                  bg="white"
                  isActive={isOpen}
                  as={Button}
                  leftIcon={<Person2Icon />}
                  fontSize="13px"
                >
                  {isOpen ? "My Account" : "My Account"}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleTheLogin}>Login</MenuItem>
                  <MenuItem onClick={handleTheRegister}>Register</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>
      <SearchFunct />
      {/* Routes */}
      <Flex bgColor={"rgb(221,2,133)"} pl={8} pr={8}>
        <Link to="/make_up">
          <Flex m={2} pl={1} pr={1}>
            <Text fontWeight={640} color="white" fontSize="17px">
              MAKE-UP{" "}
            </Text>
            <Text mt={1} color="white">
              <KeyboardArrowDownIcon />
            </Text>
          </Flex>
        </Link>

        <Link to="/skin">
          <Flex m={2} pl={1} pr={1}>
            <Text fontWeight={640} color="white" fontSize="17px">
              SKIN{" "}
            </Text>
            <Text mt={1} color="white">
              <KeyboardArrowDownIcon />
            </Text>
          </Flex>
        </Link>

        <Link to="/hair">
          <Flex m={2} pl={1} pr={1}>
            <Text fontWeight={640} color="white" fontSize="17px">
              HAIR{" "}
            </Text>
            <Text mt={1} color="white">
              <KeyboardArrowDownIcon />
            </Text>
          </Flex>
        </Link>

        <Link to="/ayurveda">
          <Flex m={2} pl={1} pr={1}>
            <Text fontWeight={640} color="white" fontSize="17px">
              AYURVEDA{" "}
            </Text>
            <Text mt={1} color="white">
              <KeyboardArrowDownIcon />
            </Text>
          </Flex>
        </Link>

        <Link to="/fragnance">
          <Flex m={2} pl={1} pr={1}>
            <Text fontWeight={640} color="white" fontSize="17px">
              FRAGNACE{" "}
            </Text>
            <Text mt={1} color="white">
              <KeyboardArrowDownIcon />
            </Text>
          </Flex>
        </Link>

        <Link to="/personal_care">
          <Flex m={2} pl={1} pr={1}>
            <Text fontWeight={640} color="white" fontSize="17px">
              PERSONAL CARE{" "}
            </Text>
            <Text mt={1} color="white">
              <KeyboardArrowDownIcon />
            </Text>
          </Flex>
        </Link>

        <Link to="/mom&baby">
          <Flex m={2} pl={1} pr={1}>
            <Text fontWeight={640} color="white" fontSize="17px">
              MOM & BABY CARE{" "}
            </Text>
            <Text mt={1} color="white">
              <KeyboardArrowDownIcon />
            </Text>
          </Flex>
        </Link>

        <Spacer />
        <Link to="/cart">
          <Button m={1} w={"100px"} h={10} pr={1} p={2}>
            <LocalMallIcon fontSize="small" />
            <Text fontSize="13px">MY CART {cart.length} </Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
