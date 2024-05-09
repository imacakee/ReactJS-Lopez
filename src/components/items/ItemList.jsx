import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { getProducts } from "../../asyncMock";
import { Spinner } from "react-bootstrap";
import Item from "./Item";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts
      .then((result) => {
        setItems(result);
      })
      .catch((error) => console.log("Error: " + error));
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <ItemCount />
      <br />
      <br />
      {items.length ? (
        <div className="d-flex flex-column" style={{ gap: 10 }}>
          {items.map((item) => (
            <Item key={`item-in-list-${item.id}`} item={item} />
          ))}
        </div>
      ) : (
        <Spinner animation="border" role="status" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
