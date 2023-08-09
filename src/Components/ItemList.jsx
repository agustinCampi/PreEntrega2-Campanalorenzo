import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((p) => {
        return (
          <Item
            key={p.id}
            nombre={p.nombre}
            description={p.description}
            stock={p.stock}
          />
        );
      })}
    </>
  );
};

export default ItemList;
