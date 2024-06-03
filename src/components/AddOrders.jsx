import { useContext, useState } from "react";
import { addOrder, updateProduct } from "../firebase/firebase";
import { CartContext } from "./context/CartContext";

export default function AddOrders() {
  const [products, setProducts] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const confirmPurchase = () => {
    const buyer = {
      name: "Pablo",
      phone: "232323",
      email: "pablito27@gmail.com",
    };
    let total = 0;
    const items = [];
    const updatedItems = [];
    products.forEach((product) => {
      items.push({
        id: product.item.id,
        price: product.item.price,
        title: product.item.title,
        quantity: product.quantity,
      });
      total += product.item.price * product.quantity;
      updatedItems.push({
        ...product.item,
        stock: product.item.stock - product.quantity,
      });
    });
    const order = { buyer, items, date: Date.now(), total };
    addOrder(order).then((id) => setOrderId(id));
    for (let i = 0; i < updatedItems.length; i++) {
      updateProduct(updatedItems[i].id, updatedItems[i]);
    }
    setProducts([]);
  };

  return (
    <>
      {/* TODO: usar sweet alert para confirmar que la compra se realizó junto con la info del id */}
      <button onClick={confirmPurchase}>Confirm purchase</button>
      {orderId && <h3>Su numero de orden es: {orderId}</h3>}
    </>
  );
}
