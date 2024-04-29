export default function ItemListContainer({ greeting }) {
  return (
    <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
      <h1>{greeting}</h1>
    </div>
  );
}
