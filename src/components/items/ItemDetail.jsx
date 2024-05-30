import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../firebase/firebase";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [products, setProducts] = useContext(CartContext);

  useEffect(() => {
    getProductById(id)
      .then((result) => {
        setItem(result);
      })
      .catch((error) => console.log("Error: " + error));
  }, []);

  const imgStyle = {
    width: 450,
    height: 450,
    objectFit: "contain",
  };

  const itemContainerStyle = {
    backgroundColor: "#f0f0f0",
    width: 760,
  };

  function isInCart(item) {
    return products.find((prd) => prd.item.id == item.id);
  }

  function addItem(quantity) {
    if (isInCart(item)) {
      const prds = [...products];
      const product = prds.find((prd) => prd.item.id == item.id);
      product.quantity = quantity;
      setProducts(prds);
    } else {
      setProducts([...products, { item, quantity }]);
    }
  }

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      {console.log(products)}
      {item && (
        <div
          className="d-flex p-4 justify-content-center rounded"
          style={itemContainerStyle}
        >
          <div className="d-flex flex-column align-items-center">
            <img src={item.pictureUrl} style={imgStyle} />
            <h1>{item.title}</h1>
            <span>{item.description}</span>
            <span>{item.category}</span>
            <span> {item.price}</span>

            <ItemCount id={item.id} stock={item.stock} onAddItem={addItem} />
          </div>
        </div>
      )}
    </div>
  );
}
