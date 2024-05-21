//devuelve todos los productos
const products = [
  {
    id: 1,
    title: "Bikini",
    description: "bikini rosa a rayas, dos piezas",
    category: "summer",
    price: 500,
    pictureUrl: "/images/bikini.jpg",
    stock: 3,
  },
  {
    id: 2,
    title: "Botas",
    description: "botas celestes con corderito",
    category: "winter",
    price: 1000,
    pictureUrl: "/images/boots.jpg",
    stock: 7,
  },
  {
    id: 3,
    title: "Guantes",
    description: "guantes tejidos a mano",
    category: "winter",
    price: 670,
    pictureUrl: "/images/gloves.jpg",
    stock: 2,
  },
  {
    id: 4,
    title: "Sombrero",
    description: "sombrero marrón vintage con florcita",
    category: "autumn",
    price: 100,
    pictureUrl: "/images/hat.png",
    stock: 8,
  },
  {
    id: 5,
    title: "Vestido negro",
    description: "vestido de seda",
    category: "summer",
    price: 490,
    pictureUrl: "/images/blackdress.jpeg",
    stock: 5,
  },
  {
    id: 6,
    title: "Zapatos",
    description: "calzado color marrón con cordones",
    category: "spring",
    price: 1070,
    pictureUrl: "/images/brownShoes.jpeg",
    stock: 1,
  },
  {
    id: 7,
    title: "Bikini negro",
    description: "bikini dos piezas cruzado",
    category: "summer",
    price: 870,
    pictureUrl: "/images/blackbikini.jpeg",
    stock: 9,
  },
  {
    id: 8,
    title: "Sombrero vaquero",
    description: "sombrero vaquero negro unisex ",
    category: "autumn",
    price: 450,
    pictureUrl: "/images/cowboyhat.jpeg",
    stock: 20,
  },
  {
    id: 9,
    title: "Tapado",
    description: "Tapado bordo, corte de mujer",
    category: "autumn",
    price: 980,
    pictureUrl: "/images/burgundycoat.jpeg",
    stock: 3,
  },
  {
    id: 10,
    title: "Vestido floral",
    description: "vestido floral con escote en v",
    category: "spring",
    price: 490,
    pictureUrl: "/images/floraldress.jpeg",
    stock: 13,
  },
];

export const getProducts = (filter = null) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(() => {
        if (filter) {
          return products.filter(
            (product) => product[filter.name] === filter.value
          );
        } else {
          return products.map((product) => ({
            id: product.id,
            title: product.title,
            pictureUrl: product.pictureUrl,
          }));
        }
      });
    }, 1000);
  });

//busca un producto por id
export const getProductById = (prdId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === parseInt(prdId)));
    }, 1000);
  });
};
