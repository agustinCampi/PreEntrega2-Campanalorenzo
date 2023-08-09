import { Box, Badge, Flex, Spacer } from "@chakra-ui/react";

const CartWidget = () => {
  const cartItemCount = 5; // Aquí puedes cambiar el número hardcodeado según tus necesidades

  return (
    <Flex>
      <Box>
        <img src="../../img/carritoo.png" alt="" />
      </Box>
      <Spacer/>
      <Box>
        <Badge colorScheme="red" borderRadius="full" px={2} ml={2}>
          {cartItemCount}
        </Badge>
      </Box>
    </Flex>
  );
};

export default CartWidget;
