import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Footer from "../Components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate()

  const handleTheLogin = ()=>{
    alert("Login Success")
    navigate("/")
  }

  return (
    <Box>
      <Navbar/>
      <Center>
        <Box mb={10} >
          <Box>
            <Text fontSize="18px" fontWeight={600} mt={3}>
            CUSTOMER LOGIN
            </Text>
          </Box>

          <Center>
          <Flex>
            <Button mr={2} bgColor={"rgb(59,89,152)"} color={"white"}>
              <Flex>
                <FacebookIcon color="secondary" />
                <Text ml={2}>Sign up with Facebook</Text>
              </Flex>
            </Button>
            <Button ml={2} bgColor={"rgb(221,75,57)"} color={"white"}>
              <Flex>
                <GoogleIcon color="secondary" />
                <Text ml={2}>Sign up with Google</Text>
              </Flex>
            </Button>
          </Flex>
          </Center>
          <Box>
            <Text fontSize="18px" color={"gray.500"} fontWeight={600} mt={3}>
              --OR--
            </Text>
          </Box>

          {/* FORM  */}
          <Box p={8} bgColor={"rgb(240,240,240)"}>
            <Box>
              <Text textAlign="left" pl={3}>
              REGISTERED CUSTOMERS
              </Text>
            </Box>
            <Box>
              <Input
                type="email"
                bgColor={"white"}
                m={2}
                width="620px"
                placeholder="Enter Your Email"
              />
            </Box>

            <Box>
              <Input
                type="password"
                bgColor={"white"}
                m={2}
                width="620px"
                placeholder="Enter Your Password"
              />
            </Box>

            <Box mt={5}>
              <Button bgColor={"black"} onClick={handleTheLogin} color="white" >LOG IN</Button>
            </Box>
          </Box>
        </Box>
      </Center>
      <Footer />
    </Box>
  );
}

export default Login;
