import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { Spinner } from "react-bootstrap";
import Item from "./Item";
import { useSearchParams } from "react-router-dom";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setItems([]);
    let filter = null;
    if (searchParams.get("category")) {
      filter = { name: "category", value: searchParams.get("category") };
    }
    getProducts(filter)
      .then((result) => {
        setItems(result);
      })
      .catch((error) => console.log("Error: " + error));
  }, [searchParams]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5">
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
