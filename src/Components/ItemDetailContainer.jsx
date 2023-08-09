
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Buzo Black",
      description: "buzo negro",
      stock: 15,
      category: "buzos",
    },
    {
      id: 2,
      nombre: "Buzo Blue",
      description: "buzo azul",
      stock: 10,
      category: "buzos",
    },
    {
      id: 3,
      nombre: "Buzo Red",
      description: "buzo rojo",
      stock: 5,
      category: "buzos",
    },
    {
      id: 4,
      nombre: "Remera Black",
      description: "remera negra",
      stock: 20,
      category: "remeras",
    },
    {
      id: 5,
      nombre: "Remera Blue",
      description: "remera azul",
      stock: 30,
      category: "remeras",
    },
    {
      id: 6,
      nombre: "Remera Red",
      description: "remera roja",
      stock: 25,
      category: "remeras",
    },
    {
      id: 7,
      nombre: "Pantalon Black",
      description: "pantalon negro",
      stock: 20,
      category: "pantalones",
    },
    {
      id: 8,
      nombre: "Pantalon Blue",
      description: "pantalon azul",
      stock: 10,
      category: "pantalones",
    },
    {
      id: 9,
      nombre: "Pantalon Red",
      description: "pantalon rojo",
      stock: 15,
      category: "pantalones",
    },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
    .then((res) => {
      res;
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
        <ItemDetail productos={productos}/>   
    </>
  )
};

export default ItemDetailContainer;
