import { Flex,Container,Menu,MenuButton,MenuList,MenuItem, Button, Heading, HStack,Box, Icon } from "@chakra-ui/react"

import { HiUserCircle } from "react-icons/hi2";
import { MdMenu } from "react-icons/md";



function TopNav({title,onOpen}){
    return(

        <>
        <Box px="4" bg="white">
        <HStack  h="16" justify="space-between" px="32"  maxW="70rem" mx="auto">
            <Icon as={MdMenu} onClick={onOpen} display={{
                base:"block",
                lg:"none"
            }}/>
                <Heading fontWeight="medium" as="h1" fontSize="28px">{title}</Heading>
            <Menu>
            <MenuButton as={Button} >
                <Icon as={HiUserCircle} fontSize="25px"/>
            </MenuButton>
            <MenuList>
                <MenuItem>Log Out</MenuItem>
                <MenuItem>Support</MenuItem>
            </MenuList>
            </Menu>

        </HStack>
        </Box>
        </>
    )
}
export default TopNav