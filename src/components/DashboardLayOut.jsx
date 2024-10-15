import { Box, Flex,Container, useDisclosure } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import SideDrawer from "./SideDrawer"

function DashboardLayOut({title,children}){
    const {isOpen,onClose,onOpen} = useDisclosure()
    return(
        <>
        <Box as="aside">
            <Flex>
                <Box
                display={{
                    base:"none",
                    lg:"flex"
                }}
                >
                <SideNav />
                </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose}/>
            <Box flexGrow={1}> 
            <TopNav title={title} onOpen={onOpen}/>
            <Box px="4">
                <Container mt="6" maxW="70rem" >
                {children}
                </Container>
            </Box>
            </Box>
            </Flex>
        </Box>
        </>
    )
}
export default DashboardLayOut