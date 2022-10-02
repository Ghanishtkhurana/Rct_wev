import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { cartContext } from "../context/cartContext";

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const [price, setPrice] = useState(0);
  const { checkOut } = useContext(cartContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  console.log(checkOut);
  console.log(cart);

  const handleTheCheckOut = ()=>{
    checkOut()
    onClose()
    alert("Congratulations Your order is Placed")
  }
  return (
    <Box>
      <Navbar />
      <Box>
        <Text
          fontSize={20}
          color="gray.600"
          textAlign="left"
          pl={5}
          pt={2}
          fontWeight={700}
          mb={2}
        >
          SHOPPING CART
        </Text>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} h="200px">
          <GridItem w="100%" h="10" colSpan={2}>
            <Box>
              <Grid templateColumns="repeat(7, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                  <Text fontSize={14} fontWeight={600} color={"gray.500"}>
                    ITEM
                  </Text>
                </GridItem>
                <GridItem colSpan={4}>
                  <Text fontSize={14} fontWeight={600} color={"gray.500"}>
                    TITLE
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  {" "}
                  <Text fontSize={14} fontWeight={600} color={"gray.500"}>
                    PRICE
                  </Text>
                </GridItem>
                {/* <GridItem colSpan={1} bg="tomato" /> */}
                {/* <GridItem colSpan={1} bg="papayawhip" /> */}
              </Grid>

              {cart.map((user) => (
                <Grid
                  key={user.id}
                  h="220px"
                  templateColumns="repeat(7, 1fr)"
                  gap={4}
                  pl={4}
                  alignItems="center"
                  borderTop="2px"
                  borderColor="gray.100"
                  mb={2}
                >
                  <GridItem colSpan={2}>
                    <Box border="2px" borderColor={"gray.200"}>
                      <Image boxSize="170px" src={user.avatar} />
                    </Box>
                    <br />
                    <Button h="30px" mt="-30px" mr={2}>
                      Edit
                    </Button>
                    <Button h="30px" mt="-30px" ml={2}>
                      Remove Item
                    </Button>
                  </GridItem>
                  <GridItem textAlign="left" pl={7} colSpan={4}>
                    <Text fontSize="16px" color={"gray.500"} fontWeight={600}>
                      {user.Title}
                    </Text>
                  </GridItem>
                  <GridItem textAlign="center" colSpan={1}>
                    <Text fontSize="16px" color={"gray.500"} fontWeight={600}>
                      ₹ {user.Price}
                    </Text>
                  </GridItem>
                </Grid>
              ))}
            </Box>
          </GridItem>

          {/* SUMMARY */}

          <GridItem w="100%" h="10">
            <Box border="2px" borderColor={"gray.300"}>
              <Text
                textAlign="left"
                color="gray.600"
                fontWeight={700}
                fontSize="17px"
                pl={5}
                pt={2}
              >
                SUMMARY
              </Text>

              {/* ExpendFunction  */}
              {/* <Accordion defaultIndex={[0]} allowMultiple p={4}>
                <AccordionItem bgColor={"gray.200"}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ESTIMATE SHIPPING AND TAX
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} bgColor="gray.50">
                    <Text fontSize="13px">
                      Enter your destination to get a shipping estimate
                    </Text>

                    <Text p={2} mt={2} textAlign="left">
                      Country
                    </Text>
                    <Input bgColor={"white"} placeholder="Enter you Country" />

                    <Text p={2} mt={2} textAlign="left">
                      State
                    </Text>
                    <Input bgColor={"white"} placeholder="Enter your State" />

                    <Text p={2} mt={2} textAlign="left">
                      Zip/Postal Code
                    </Text>
                    <Input
                      bgColor={"white"}
                      placeholder="Enter you Zip/Postal Code"
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion> */}

              <Flex p={5}>
                <Text>SubTotal</Text>
                <Spacer />
                <Text>
                  ₹ {Math.round(cart.reduce((a, c) => a + c.Price, 0))}
                </Text>
              </Flex>

              <Flex p={5}>
                <Text>Shipping Charge</Text>
                <Spacer />
                <Text>₹ 0</Text>
              </Flex>

              <Flex p={5}>
                <Text>Order Total Incl. GST</Text>
                <Spacer />
                <Text>
                  ₹ {Math.round(cart.reduce((a, c) => a + c.Price, 0))}
                </Text>
              </Flex>

              {/* <Accordion defaultIndex={[0]} allowMultiple p={4}>
                <AccordionItem bgColor={"gray.200"}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        APPLY DISCOUNT CODE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel bgColor="gray.50">
                    <Text p={2} mt={2} textAlign="left">
                      Enter discount code
                    </Text>
                    <Input
                      bgColor={"white"}
                      placeholder="Enter discount code"
                    />
                    <br />
                    <Button mt={5} bgColor="black" color={"white"}>
                      APPLY DISCOUNT
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion> */}
              {/* Aleart Diologe  */}
              <Button mb={8} colorScheme="red" onClick={onOpen}>
              PROCEED TO CHECKOUT
              </Button>

              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    PROCEED TO CHECKOUT
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure? You want to place the order?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="red" onClick={handleTheCheckOut} ml={3}>
                        Placed Order
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>

            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* <Footer  /> */}
    </Box>
  );
}

export default Cart;
