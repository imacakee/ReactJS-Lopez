import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>{greeting}</h1>
      <ItemCount />
    </div>
  );
}
