import { useContext } from "react";
import { Cart } from "react-bootstrap-icons";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartWidget() {
  const [products, setProducts] = useContext(CartContext);
  const productsInCart = products.length;
  const navigate = useNavigate();

  const containerStyle = {
    cursor: "pointer",
  };

  return (
    <>
      <div
        style={containerStyle}
        className="position-relative d-flex align-items-start py-1"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <Cart size={36}></Cart>
        <div className="position-absolute top-0 bottom-0 start-0 end-0 text-center pt-2">
          <span className="text-center fw-bold" style={{ fontSize: 14 }}>
            {productsInCart}
          </span>
        </div>
      </div>
    </>
  );
}
