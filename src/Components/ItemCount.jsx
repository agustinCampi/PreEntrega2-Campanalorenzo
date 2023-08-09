import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" shadow="md">
      <h2>Contador</h2>
      <p>{count}</p>
      <Button colorScheme="teal" onClick={increment} mr={2}>
        +
      </Button>
      <Button colorScheme="red" onClick={decrement} mr={2}>
        -
      </Button>
      <Button colorScheme="gray" onClick={reset} mr={2}>
        Reset
      </Button>
    </Box>
  );
};

export default ItemCount;
