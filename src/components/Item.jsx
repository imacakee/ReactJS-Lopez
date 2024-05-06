export default function Item({ item }) {
  const imgStyle = {
    width: 100,
    height: 100,
    objectFit: "contain",
  };

  return (
    <div style={{ width: 760 }} className="d-flex p-4 justify-content-between">
      <div className="d-flex flex-column">
        {" "}
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
      <img style={imgStyle} src={item.pictureUrl} alt="" />
    </div>
  );
}
