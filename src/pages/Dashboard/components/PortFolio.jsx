import {Button, HStack,Icon,Stack,Tag,Text} from "@chakra-ui/react"
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineArrowDown,AiOutlineArrowUp } from "react-icons/ai";


function PortFolio(){
    return(
        <>
        <HStack justify="space-between" bg="white" borderRadius="xl" p="6" spacing={16}>
            <HStack>
            <Stack>
                <HStack color="black.80">
                   <Text fontSize="14px" color="">Total Portfolio Value</Text> 
                    <Icon as={IoMdInformationCircle}/>
                </HStack>
                <Text textStyle="h2">₹ 112,312.24</Text>
            </Stack>
            <Stack>
                <HStack color="black.80">
                   <Text fontSize="sm" color="">Wallet Balance</Text> 
                    <Icon as={IoMdInformationCircle}/>
                </HStack>
                <HStack>
                <HStack>
                <Text textStyle="h2">22.39401000</Text><Tag colorScheme="gray">BTC</Tag>
                </HStack>
                <HStack>
                <Text textStyle="h2">₹ 1,300.00</Text><Tag colorScheme="gray">INR</Tag>
                </HStack>
                </HStack>
            </Stack>
            </HStack>
            <HStack>
                <Button leftIcon={<Icon as={AiOutlineArrowDown}/>}>Deposit</Button>
                <Button leftIcon={<Icon as={AiOutlineArrowUp}/>} >Withdraw</Button>
            </HStack>
        </HStack>
        </>
    )
}
export default PortFolio