import { Box, Flex, SimpleGrid,Skeleton, Stack } from "@chakra-ui/react";

function Skele() {
    // const dhacha = new Array(12).fill(0).map((user)=><Skeleton height='20px' />)
  return (
      <Stack>
      <SimpleGrid mb={10} ml={-5} columns={[1, 2, 3, 4]}>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
        <Skeleton ml={5} mr={5} mt={5} height={300} width={300}/>
      </SimpleGrid>
      </Stack>
  );
}

export default Skele;
