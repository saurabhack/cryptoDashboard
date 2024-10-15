import { CustomCard } from "../../../Chakra/CustomCard";
import { Button, HStack, Icon, Stack, Tag , Text, Flex, Image} from "@chakra-ui/react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { IoMdInformationCircle } from "react-icons/io"
import { BsArrowUp } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import graph from "../../../assets/graph.png"



const PriceSection=()=>{
    const timeStamp=["7:15","7:55","8.55"]
    return(
        <>
        <CustomCard >
        <Flex justify="space-between" align="center" >
        <HStack justify="space-between" bg="white" borderRadius="xl" p="6" spacing={16}>
            <HStack>
            <Stack>
                <HStack color="black.80">
                   <Text fontSize="sm" color="">Wallet Balance</Text> 
                    <Icon as={IoMdInformationCircle}/>
                </HStack>
                <HStack>
                <HStack>
                <Text textStyle="h2">22.39401000</Text>
                
                <HStack fontWeight="medium" color="green.500">
                    <Icon as={BsArrowUp}></Icon>
                <Text textStyle="h2" color="green.500" fontSize="sm">22%</Text>
                </HStack>
                </HStack>
                </HStack>
            </Stack>
            <HStack>
                <Button leftIcon={<Icon as={FaCirclePlus }/>}>Buy</Button>
                <Button leftIcon={<Icon as={FaCircleMinus}/>} >Sell</Button>
            </HStack>

            </HStack>
           
        </HStack>
        </Flex>
        <Image w="50%" src={graph} top="3rem"></Image>
        <HStack>
            {
                timeStamp.map((val,i)=>{
                return <Text key={i} fontSize="sm" color="black.80">{val}</Text>
                })
            }
        </HStack>
        </CustomCard>
        </>
    )
}
export default PriceSection