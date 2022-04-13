import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon ,TimeIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

 function Nav() {
   const { colorMode, toggleColorMode } = useColorMode();

   return (
     <>
       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
         <Flex h="auto" alignItems={"center"} justifyContent={"space-between"}>
           <Box>
             <Text fontWeight={800} fontSize="3xl">
               Pulzion 2022
             </Text>
             <Text fontWeight={800} fontSize="2xl" mt="4">
               Testname
             </Text>
           </Box>
           <Box ml="auto" mr="auto">
             <Text fontWeight={800} fontSize="2xl">
               {" "}
               <TimeIcon mr={2} /> Time Remaining -{" "}
             </Text>
           </Box>

           <Flex alignItems={"center"}>
             <Stack direction={"row"} spacing={7}>
               <Button onClick={toggleColorMode}>
                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
               </Button>

               <Menu>
                 <MenuButton
                   as={Button}
                   rounded={"full"}
                   variant={"link"}
                   cursor={"pointer"}
                   minW={0}
                 >
                   <Avatar
                     size={"sm"}
                     src={"https://avatars.dicebear.com/api/male/username.svg"}
                   />
                 </MenuButton>
                 <MenuList alignItems={"center"}>
                   <br />
                   <Center>
                     <Avatar
                       size={"2xl"}
                       src={
                         "https://avatars.dicebear.com/api/male/username.svg"
                       }
                     />
                   </Center>
                 </MenuList>
               </Menu>
             </Stack>
           </Flex>
         </Flex>
       </Box>
     </>
   );
 }

export default Nav;