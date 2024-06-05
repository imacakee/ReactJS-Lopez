import { useContext, useState } from "react";
import { addOrder, updateProduct } from "../firebase/firebase";
import { CartContext } from "./context/CartContext";
import Swal from "sweetalert2";

export default function AddOrders() {
  const [products, setProducts] = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const confirmPurchase = () => {
    Swal.fire({
      title: "Done shopping ?",
      showCancelButton: true,
      confirmButtonText: "Purchase",
    }).then((result) => {
      if (result.isConfirmed) {
        purchase();
      }
    });
  };

  const purchase = () => {
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
    addOrder(order).then((id) => {
      Swal.fire(
        `Thanks for your purchase!! The number of your order id is: ${id}`,
        "",
        "success"
      );
    });
    for (let i = 0; i < updatedItems.length; i++) {
      updateProduct(updatedItems[i].id, updatedItems[i]);
    }
    setProducts([]);
  };

  const deleteCart = () => {
    setProducts([]);
  };

  //

  return (
    <>
      <div className="d-flex gap-4">
        <button onClick={confirmPurchase}>Confirm purchase</button>
        <button onClick={deleteCart}>Clear cart</button>
      </div>
    </>
  );
}
