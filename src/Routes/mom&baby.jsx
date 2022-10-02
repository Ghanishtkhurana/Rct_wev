import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductPage from "../Components/Product";

const getData = () => {
  return axios("https://khurana123.herokuapp.com/data?_limit=12&type=mom_baby");
};

function MomBaby() {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleTheFetch();
  }, []);

  const handleTheFetch = () => {
    getData().then((res) => setData(res.data));
  };

  return (
    <Box>
      <Navbar />
      <Center>
        <Text color="gray.500" m={5} fontWeight={700} fontSize="25px">
          MOM & BABY CARE
        </Text>
      </Center>
      <SimpleGrid mb={10} columns={[1, 2, 3, 4]}>
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
      <Footer />
    </Box>
  );
}

export default MomBaby;
