import { Stack,HStack,Text,Icon, Heading ,Box} from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";


function SideNav(){
    const navLinks=[{
        icons: RiDashboardLine,
        text:"Dashboard",
        link:"/"
    },
    {
        icons: LuArrowUpDown,
        text:"Transactions",
        link:"/Transactions"
    }
    ]
    return(
        <>
        <Stack bg="white" justify="space-between" boxShadow="lg" w="16rem" h="100vh"  >
            <Box>
            <Heading textAlign="center" fontSize="20px" pt="56px" as="h1">@DOSOMECODING</Heading>

            <Box mt="6" mx="3">
            {
                navLinks.map((val, i)=>{
                    return <HStack mx="12px" borderRadius="10px" key={i} py="3" px="4" _hover={{
                        bg:"#F3F3F7",
                        fontWeight:"medium",
                        color:"#171717"
                    }}
                    color="#797E82" 
                    >
                        <Icon as={val.icons}>
                        </Icon>
                        <Text fontSize="14px" >{val.text}</Text>
                    </HStack>
                })
            }
            </Box>
            </Box>
            <Box mt="6" mx="3" mb="6">
            <HStack mx="12px" borderRadius="10px"  py="3" px="4" _hover={{
                        bg:"#F3F3F7",
                        fontWeight:"medium",
                        color:"#171717"
                    }}
                    color="#797E82" 
                    >
                        <Icon as={BiSupport}>
                        </Icon>
                        <Text fontSize="14px" >Support</Text>
                    </HStack>
            </Box>
        </Stack>
        </>
    )
}
export default SideNav