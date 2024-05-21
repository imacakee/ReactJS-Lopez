import { useNavigate } from "react-router-dom";
import "./Item.css";

export default function Item({ item }) {
  const navigate = useNavigate();

  const imgStyle = {
    width: 100,
    height: 100,
    objectFit: "contain",
  };

  const itemContainerStyle = {
    backgroundColor: "#f0f0f0",
    width: 760,
    cursor: "pointer"
  };

  return (
    <div
      className="item d-flex p-4 justify-content-between rounded"
      style={itemContainerStyle}
      onClick={() => navigate(`/item/${item.id}`)}
    >
      <div className="d-flex flex-column">
        <h5>{item.title}</h5>
      </div>
      <img style={imgStyle} src={item.pictureUrl} alt="" />
    </div>
  );
}
