import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  BagPlusFill,
  BagDashFill,
  Trash3Fill,
  Trash,
} from "react-bootstrap-icons";
import AddOrders from "../AddOrders";

export default function CartDetail() {
  const [products, setProducts] = useContext(CartContext);

  const total = products.reduce(
    (totalPrice, product) =>
      (totalPrice += product.item.price * product.quantity),
    0
  );

  const imgStyle = {
    width: 100,
    height: 100,
    objectFit: "contain",
  };

  const iconSize = 34;
  const iconColor = "#3a4a26";
  const iconCursor = "pointer";

  const removeProduct = (id) => {
    if (products.find((prd) => prd.item.id === id)) {
      const prds = [...products.filter((prd) => prd.item.id !== id)];
      setProducts(prds);
    }
  };

  const increaseAmount = (id) => {
    const product = products.find((prd) => prd.item.id === id);
    if (product) {
      const prds = [...products];
      prds.forEach((product) => {
        if (product.item.id === id && product.quantity < product.item.stock) {
          product.quantity += 1;
        }
      });
      setProducts(prds);
    }
  };

  const decreaseAmount = (id) => {
    const product = products.find((prd) => prd.item.id === id);
    if (product) {
      const prds = [...products];
      prds.forEach((product) => {
        if (product.item.id === id && product.quantity > 1) {
          product.quantity -= 1;
        }
      });
      setProducts(prds);
    }
  };

  const containerFlex = {
    flex: 1,
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Shopping Cart</h2>
      <div className="d-flex flex-column w-75 align-items-center gap-2">
        {products.length ? (
          <>
            {products.map((prd, i) => (
              <div
                className="d-flex w-100 justify-content-between align-items-center border rounded"
                key={`cart-list-prd-${i}`}
              >
                <div style={containerFlex} className="d-flex ">
                  <img src={prd.item.pictureUrl} style={imgStyle} />
                </div>
                <div
                  style={containerFlex}
                  className="d-flex  align-items-center"
                >
                  <span style={{ fontSize: 20 }}>{prd.item.title}</span>
                </div>
                <div
                  style={containerFlex}
                  className="d-flex  justify-content-center align-items-center gap-4"
                >
                  <BagPlusFill
                    size={iconSize}
                    color={iconColor}
                    cursor={iconCursor}
                    onClick={() => increaseAmount(prd.item.id)}
                  />
                  <span
                    style={{ fontSize: 20, fontWeight: 500, lineHeight: 1 }}
                  >
                    {prd.quantity}
                  </span>
                  <BagDashFill
                    size={iconSize}
                    color={iconColor}
                    cursor={iconCursor}
                    onClick={() => decreaseAmount(prd.item.id)}
                  />
                </div>
                <div
                  style={containerFlex}
                  className="d-flex  justify-content-center align-items-center px-4"
                >
                  <Trash3Fill
                    size={iconSize}
                    color={iconColor}
                    cursor={iconCursor}
                    onClick={() => removeProduct(prd.item.id)}
                  />
                </div>
              </div>
            ))}
            <div className="w-100 d-flex justify-content-end my-3">
              <h4>Total price ${total}</h4>
            </div>

            <AddOrders />
          </>
        ) : (
          <h4>carrito vacio :/</h4>
        )}
      </div>
    </div>
  );
}
