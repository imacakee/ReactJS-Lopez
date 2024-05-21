import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemCount from "./ItemCount";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log(id);
    getProductById(id)
      .then((result) => {
        setItem(result);
      })
      .catch((error) => console.log("Error: " + error));
  }, []);

  const imgStyle = {
    width: 450,
    height: 450,
    objectFit: "contain",
  };

  const itemContainerStyle = {
    backgroundColor: "#f0f0f0",
    width: 760,
  };

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      {item && (
        <div
          className="d-flex p-4 justify-content-center rounded"
          style={itemContainerStyle}
        >
          <div className="d-flex flex-column align-items-center">
            <img src={item.pictureUrl} style={imgStyle} />
            <h1>{item.title}</h1>
            <span>{item.description}</span>
            <span>{item.category}</span>
            <span> {item.price}</span>

            <ItemCount stock={item.stock} />
          </div>
        </div>
      )}
    </div>
  );
}
