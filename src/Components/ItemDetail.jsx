import ItemCount from "./ItemCount";
import { Card, CardHeader, CardBody, CardFooter, Center, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";


const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filteredProducts = productos.filter((producto) => producto.id == id);
  return (
    <>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <Center p="1rem">
              <Card>
                <CardHeader>
                  <Heading size="md"> {p.nombre}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{p.description}</Text>
                  <Text>{p.category}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount />
                </CardFooter>
              </Card>
              <ItemCount/>  
            </Center>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;
