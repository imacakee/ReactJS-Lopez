import Spinner from "react-bootstrap/Spinner";
import Item from "./Item";

export default function ItemList({ itemList }) {
  return (
    <>
      <h1>Lista de items</h1>
      {itemList.length ? (
        itemList.map((item) => (
          <Item key={`item-in-list-${item.id}`} item={item} />
        ))
      ) : (
        <Spinner animation="border" role="status" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
}
