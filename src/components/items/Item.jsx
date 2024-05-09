import { useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "./ItemDetail";
import { Spinner } from "react-bootstrap";

export default function Item({ item }) {
  const [fullItem, setFullItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const imgStyle = {
    width: 100,
    height: 100,
    objectFit: "contain",
  };

  const itemContainerStyle = {
    backgroundColor: "#f0f0f0",
    width: 760,
  };

  const buttonStyle = {
    width: 130,
    textAlign: "center",
  };

  const verDetalleItem = () => {
    setIsLoading(true);
    getProductById(item.id).then((fetchedItem) => {
      if (fetchedItem) {
        setFullItem(fetchedItem);
      }
    });
  };

  return (
    <div
      className="d-flex p-4 justify-content-between rounded"
      style={itemContainerStyle}
    >
      <div className="d-flex flex-column">
        <h5>{item.title}</h5>
        {!fullItem && (
          <button style={buttonStyle} onClick={verDetalleItem}>
            {!isLoading && "Ver detalle"}
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </button>
        )}
        {fullItem && <ItemDetail item={fullItem} />}
      </div>
      <img style={imgStyle} src={item.pictureUrl} alt="" />
    </div>
  );
}
