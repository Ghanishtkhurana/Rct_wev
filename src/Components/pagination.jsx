import { Button } from "@chakra-ui/react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Pagination(){
    const prev = <Button><ArrowBackIosNewIcon/></Button>
    return (
        <Box>
            {prev}
        </Box>
    )
}

export default Pagination