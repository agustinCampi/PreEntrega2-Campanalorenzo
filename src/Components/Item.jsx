import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Link,
} from "@chakra-ui/react";



const Item = (nombre, description,) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md"> {nombre}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <Button>
          <Link to={"/"} color="white" href="/">
            Detalles
          </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
