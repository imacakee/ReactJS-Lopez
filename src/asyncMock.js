//devuelve todos los productos
const products = [
  //TODO: change products for clothes xd
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

export const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      products.map((product) => ({
        id: product.id,
        title: product.title,
        pictureUrl: product.pictureUrl,
      }))
    );
  }, 2000);
});

//busca un producto por id
export const getProductById = (prdId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === prdId));
    }, 2000);
  });
};
