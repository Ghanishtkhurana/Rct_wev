import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import HdrAutoOutlinedIcon from "@mui/icons-material/HdrAutoOutlined";
import ProductSlider from "../Components/Slider";
import ImageSlider from "../Components/ImageSlider";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductPage from "../Components/Product";
import StrollerOutlinedIcon from "@mui/icons-material/StrollerOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import Skele from "../Components/Skeleton";

const getData = async() => {
  const res = await fetch("https://khurana123.herokuapp.com/data?_limit=12")
  const data = await res.json()
  return data
};

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleTheFetch();
  }, []);

  const handleTheFetch = async () => {
    setLoading(true);
    // getData().then((res) => setData(res.data));
    const append = await getData();
    setData(append);
    setLoading(false);
  };

  console.log("data", data);
  return (
    <Box>
      <Navbar />
      <Grid
        templateColumns="repeat(5, 1fr)"
        p={4}
        border="1px"
        borderColor="gray.400"
        gap={6}
        mt={6}
        ml={10}
        mr={10}
      >
        <GridItem w={300}>
          <Flex direction={"column"} textAlign="left">
            <Flex mb={5}>
              <Text m={2}>
                <ViewListRoundedIcon />
              </Text>
              <Text m={2} fontWeight={600}>
                ALL CATEGORIES
              </Text>
            </Flex>

            <Link to="/make_up">
              <Flex mb={2} pl={2} pr={2}>
                <Text color={"rgb(221,2,133)"} fontSize={15}>
                  <AutoAwesomeOutlinedIcon />
                </Text>
                <Text fontSize={15} ml={2}>
                  MAKE UP
                </Text>
                <Spacer />
                <Text fontSize={15}>
                  <KeyboardArrowRightRoundedIcon />
                </Text>
              </Flex>
            </Link>

            <Link to="/skin">
              <Flex mb={2} pl={2} pr={2}>
                <Text color={"rgb(221,2,133)"} fontSize={15}>
                  <AutoFixHighOutlinedIcon />
                </Text>
                <Text fontSize={15} ml={2}>
                  SKIN
                </Text>
                <Spacer />
                <Text fontSize={15}>
                  <KeyboardArrowRightRoundedIcon />
                </Text>
              </Flex>
            </Link>

            <Link to="/hair">
              <Flex mb={2} pl={2} pr={2}>
                <Text color={"rgb(221,2,133)"} fontSize={15}>
                  <ShowerOutlinedIcon />
                </Text>
                <Text fontSize={15} ml={2}>
                  HAIR
                </Text>
                <Spacer />
                <Text fontSize={15}>
                  <KeyboardArrowRightRoundedIcon />
                </Text>
              </Flex>
            </Link>

            <Link to="/ayurveda">
              <Flex mb={2} pl={2} pr={2}>
                <Text color={"rgb(221,2,133)"} fontSize={15}>
                  <SpaOutlinedIcon />
                </Text>
                <Text fontSize={15} ml={2}>
                  AYURVEDA
                </Text>
                <Spacer />
                <Text fontSize={15}>
                  <KeyboardArrowRightRoundedIcon />
                </Text>
              </Flex>
            </Link>

            <Link to="personal_care">
              <Flex mb={2} pl={2} pr={2}>
                <Text color={"rgb(221,2,133)"} fontSize={15}>
                  <ControlPointOutlinedIcon />
                </Text>
                <Text fontSize={15} ml={2}>
                  PERSONAL CARE
                </Text>
                <Spacer />
                <Text fontSize={15}>
                  <KeyboardArrowRightRoundedIcon />
                </Text>
              </Flex>
            </Link>

            <Link to="/mom&baby">
              <Flex mb={2} pl={2} pr={2}>
                <Text color={"rgb(221,2,133)"} fontSize={15}>
                  <StrollerOutlinedIcon />
                </Text>
                <Text fontSize={15} ml={2}>
                  MOM & BABY CARE
                </Text>
                <Spacer />
                <Text fontSize={15}>
                  <KeyboardArrowRightRoundedIcon />
                </Text>
              </Flex>
            </Link>

            <Link to="/fragnance">
              <Flex mb={2} pl={2} pr={2}>
                <Text color={"rgb(221,2,133)"} fontSize={15}>
                  <GrassOutlinedIcon />
                </Text>
                <Text fontSize={15} ml={2}>
                  FRAGANCE
                </Text>
                <Spacer />
                <Text fontSize={15}>
                  <KeyboardArrowRightRoundedIcon />
                </Text>
              </Flex>
            </Link>
          </Flex>
        </GridItem>

        <Spacer />

        <GridItem w={800}>
          <ImageSlider />
        </GridItem>
      </Grid>

      <Box mb={10} ml={10} mr={10} mt={4}>
        <Image src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg" />
      </Box>

      {/* Products  */}
      <ProductSlider />
      <Center>
        {" "}
        <Text fontWeight={700} m={10} fontSize="22px">
          All Products
        </Text>{" "}
      </Center>

      <Container
        maxW={{ base: "full", md: "container.xl" }}
        p={{ base: 2, lg: 0 }}
      >
        {loading && <Skele/>}
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {data.map((user) => (
            <ProductPage
              id={user.id}
              key={user.id}
              avatar={user.avatar}
              title={user.Title}
              price={user.Price}
              rating={user.Rating}
            />
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
