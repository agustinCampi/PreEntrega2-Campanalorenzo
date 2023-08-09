import CartWidget from "./CartWidget";
import { Flex, Box, Spacer, Link } from "@chakra-ui/react";



const NavBar = () => {
  return (
    <>
      <Flex backgroundColor="blue.500" p="4">
        <Box p="2">
          <Link to={"/"} color="white">
            ACL ECOMMERCE
          </Link>
        </Box>
        <Spacer />
        <Box p="2">
          <Link to={"/"} color="white" >
            Inicio
          </Link>
        </Box>
        <Box p="2">
          <Link to={"/category/buzos"} color="white" >
            Buzos
          </Link>
        </Box>
        <Box p="2">
          <Link to={"/category/remeras"} color="white" >
            Remeras
          </Link>
        </Box>
        <Box p="2">
          <Link to={"/category/pantalones"}color="white">
            Pantalones
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link to={"/cart"}>
          <CartWidget />
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
