import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(0);
  const stock = 10;

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
    console.log(`Agregué ${count}`);
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 25,
  };

  return (
    <>
      <h3>Contador de productos</h3>
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
      <button onClick={onAdd}>Agregar al carrito</button>
    </>
  );
}
