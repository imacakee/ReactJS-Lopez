export default function ItemDetail({ item }) {
  return (
    <>
      <span>{item.description}</span>
      <span>Price: {item.price}</span>
    </>
  );
}
