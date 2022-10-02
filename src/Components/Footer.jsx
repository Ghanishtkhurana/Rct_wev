import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Box bg={"rgb(35,35,35)"}>
      <Flex p={10} border="1px" borderColor="gray.200">
        <Flex pl={8} direction={"column"} color="white" textAlign={"left"}>
          <Text fontWeight={700}>CONTACT INFO</Text>
          <Text mb={5} color={"rgb(221,2,133)"}>
            _ _ _ _ _ _ _ _ _ _ _
          </Text>
          <Flex direction={"column"} color={"gray.400"} cursor="pointer">
            <Text mb={2}>(+91) 7877061041</Text>
            <Text mb={2}>support@beautybebo.com</Text>
            <Text mb={2}>sales@beautybebo.com</Text>
            <Spacer />
            <Text mb={2}>Open time: 10:00AM - 7:00PM</Text>

            <Flex>
              <Button bg={"none"}>
                <FacebookOutlinedIcon />
              </Button>
              <Button bg={"none"}>
                <BsInstagram />
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Spacer />
        <Flex
          pl={8}
          h="300px"
          direction={"column"}
          color="white"
          cursor="pointer"
          textAlign={"left"}
        >
          <Text fontWeight={700}>QUICK LINKS</Text>
          <Text mb={5} color={"rgb(221,2,133)"}>
            _ _ _ _ _ _ _ _ _ _ _
          </Text>
          <Flex direction={"column"} color={"gray.400"}>
            <Text>
              <li>About us</li>
            </Text>
            <Spacer />
            <Text>
              <li>Contact Us</li>
            </Text>
            <Spacer />
            <Text>
              <li>Term & Condition</li>
            </Text>
            <Spacer />
            <Text>
              <li>Privacy Policy</li>
            </Text>
            <Spacer />
            <Text>
              <li>Return and Refund Policy</li>
            </Text>
            <Spacer />
            <Text>
              <li>Shipping Policy</li>
            </Text>
            <Spacer />
          </Flex>
        </Flex>

        <Spacer />
        <Flex
          pl={8}
          h="300px"
          direction={"column"}
          color="white"
          cursor="pointer"
          textAlign={"left"}
        >
          <Text fontWeight={700}>QUICK LINKS</Text>
          <Text mb={5} color={"rgb(221,2,133)"}>
            _ _ _ _ _ _ _ _ _ _ _
          </Text>
          <Flex direction={"column"} color={"gray.400"}>
            <Text>
              <li>My Account</li>
            </Text>
            <Spacer />
            <Text>
              <li>Track your Order</li>
            </Text>
            <Spacer />
            <Text>
              <li>Order Returns</li>
            </Text>
            <Spacer />
            <Text>
              <li>Wishlist</li>
            </Text>
            <Spacer />
            <Text>
              <li>News & Events</li>
            </Text>
            <Spacer />
            <Text>
              <li>FAQ</li>
            </Text>
          </Flex>
        </Flex>
        <Spacer />
        <Flex
          pl={8}
          h="300px"
          direction={"column"}
          color="white"
          cursor="pointer"
          textAlign={"left"}
        >
          <Text fontWeight={700}>CATEGORIES</Text>
          <Text mb={5} color={"rgb(221,2,133)"}>
            _ _ _ _ _ _ _ _ _ _ _
          </Text>
          <Flex direction={"column"} color={"gray.400"}>
            <Text>
              <li>Make-up</li>
            </Text>
            <Spacer />
            <Text>
              <li>Skin</li>
            </Text>
            <Spacer />
            <Text>
              <li>Hair</li>
            </Text>
            <Spacer />
            <Text>
              <li>Personal Care</li>
            </Text>
            <Spacer />
            <Text>
              <li>Mom & Baby Care Fragrance</li>
            </Text>
            <Spacer />
            <Text>
              <li>Ayurveda</li>
            </Text>
            <Spacer />
          </Flex>
        </Flex>
      </Flex>
      <Flex p={10}>
        <Box>
          <Image src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" />
        </Box>
        <Spacer />
        <Flex gap={5} pr={10} pd={10}>
          <Text color={"white"} pt={2} fontWeight={700}>
            SignUp For NewsLetter
          </Text>
          <Flex>
            <Input
              fontSize="13px"
              pl={20}
              pr={20}
              borderRightRadius="0"
              bgColor={"white"}
              placeholder="SignUp For NewsLetter"
            ></Input>
            <Button
              pl={10}
              pr={10}
              color={"white"}
              bgColor={"rgb(221,2,133)"}
              borderLeftRadius="0"
            >
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
