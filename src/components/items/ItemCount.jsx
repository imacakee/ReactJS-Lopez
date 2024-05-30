import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ItemCount({ id, stock, onAddItem }) {
  const [products, setProducts] = useContext(CartContext);
  const countInitialValue =
    products.find((prd) => prd.item.id === id)?.quantity || 0;
  const [count, setCount] = useState(countInitialValue);

  const incrementNumber = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const decreaseNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onAdd = () => {
    onAddItem(count);
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 25,
  };

  return (
    <>
      <h5>Stock: {stock}</h5>
      <section
        style={{ margin: 10, display: "flex", alignItems: "center", gap: 50 }}
      >
        <button
          style={buttonStyle}
          onClick={incrementNumber}
          disabled={stock <= count}
        >
          +
        </button>
        {count}
        <button
          style={buttonStyle}
          onClick={decreaseNumber}
          disabled={count <= 0}
        >
          -
        </button>
      </section>
      <button onClick={onAdd} disabled={count == 0}>
        Agregar al carrito
      </button>
    </>
  );
}
