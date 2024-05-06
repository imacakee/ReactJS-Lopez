import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const itemList = [
    {
      id: 1,
      title: "airpods",
      description: "airpods pro second generation",
      price: 200,
      pictureUrl: "/images/airpods-2.jpeg",
    },
    {
      id: 2,
      title: "laptop",
      description: "macBook pro skyblue",
      price: 500,
      pictureUrl: "/images/pinkmacbook.jpeg",
    },
    {
      id: 3,
      title: "IPhone 15",
      description: "IPhone 15 pink 260GB",
      price: 550,
      pictureUrl: "/images/iphone15pink.jpeg",
    },
    {
      id: 4,
      title: "mouse",
      description: "mx master 3",
      price: 100,
      pictureUrl: "/images/mx-master3.webp",
    },
    {
      id: 5,
      title: "toast lamp",
      description: "green smiley toast lamp",
      price: 70,
      pictureUrl: "/images/toastlamp.jpeg",
    },
  ];

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemList);
    }, 2000);
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    myPromise
      .then((result) => {
        setItems(result);
      })
      .catch((error) => console.log("Error: " + error));
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>{greeting}</h1>
      <ItemCount />
      <br />
      <br />
      <ItemList itemList={items} />
    </div>
  );
}
