import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import styles from "./Search.module.css"

function getUser({shabd}){
    return axios(`https://khurana123.herokuapp.com/data?_limit=12&q=${shabd}`)
}

function SearchFunct() {
  const [data,setData] = useState([])
  const [shabd,setShabd] = useState("")

  const handleTheFetch = ()=>{
    getUser({shabd})
    .then(res=>setData(res.data))
  }

  const handleTheChange = (e)=>{
    // console.log(e.target.value)
    if(e.target.value === ""){
        setData([])
    }
    else{
        setShabd(e.target.value)
        handleTheFetch()
    }
  }
  console.log(data)
  return (
    <Container>
    {/* <Input
            onInput={handleTheChange}
            borderLeftRadius="0"
            borderColor="gray.400"
            fontSize="14px"
            placeholder="Enter your search"
            borderRightRadius="0"
          />
    {data.length!==0 && <Box height={200} width={485} zIndex="1" position="absolute" border="2px" bgColor={"gray.300"} className={styles.container} >
        {
        data.map((user)=><li>{user.Title}</li>)
        }
    </Box>
    } */}
    </Container>
  );
}

export default SearchFunct;
