import { useContext, useState } from "react";
import { addOrder, updateProduct } from "../firebase/firebase";
import { CartContext } from "./context/CartContext";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Swal from "sweetalert2";

export default function AddOrders() {
  const [products, setProducts] = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState("");
  const [formNumber, setFormNumber] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const onOpenModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  const confirmPurchase = () => {
    onOpenModal();
  };

  const purchase = () => {
    const buyer = {
      name: formName,
      phone: formNumber,
      email: formEmail,
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

  return (
    <>
      <Modal open={showModal} onClose={onCloseModal} center>
        <form action="" className="d-flex flex-column gap-3 m-5">
          <div className="d-flex justify-content-between gap-5">
            <label htmlFor="name">Name:</label>
            <input
              style={{ backgroundColor: "#d1d1d1", color: "black" }}
              className="border-0"
              type="text"
              name="name"
              onChange={(event) => setFormName(event.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between gap-5">
            <label htmlFor="number">Phone number:</label>
            <input
              style={{ backgroundColor: "#d1d1d1", color: "black" }}
              className="border-0"
              type="text"
              name="number"
              onChange={(event) => setFormNumber(event.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between gap-5">
            <label htmlFor="email">Email:</label>
            <input
              style={{ backgroundColor: "#d1d1d1", color: "black" }}
              className="border-0"
              type="text"
              name="email"
              onChange={(event) => setFormEmail(event.target.value)}
            />
          </div>
        </form>
        <div className="d-flex justify-content-between gap-2">
          <button
            className="w-100 rounded"
            onClick={purchase}
            disabled={formName === "" || formNumber === "" || formEmail === ""}
          >
            Purchase
          </button>
          <button className="w-100 rounded" onClick={onCloseModal}>
            Cancel
          </button>
        </div>
      </Modal>

      <div className="d-flex gap-4 my-3">
        <button onClick={confirmPurchase}>Confirm purchase</button>
        <button onClick={deleteCart}>Clear cart</button>
      </div>
    </>
  );
}
