import { Cart } from "react-bootstrap-icons";

export default function CartWidget() {
  const productsInCart = 10;

  return (
    <>
      <div className="position-relative d-flex align-items-start py-1">
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
