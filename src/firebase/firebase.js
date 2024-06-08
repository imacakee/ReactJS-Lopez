// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN9-M-4gATPvturGOwl8qA6h4R2Db7kzE",
  authDomain: "my-ecommerce-react24.firebaseapp.com",
  projectId: "my-ecommerce-react24",
  storageBucket: "my-ecommerce-react24.appspot.com",
  messagingSenderId: "832937498376",
  appId: "1:832937498376:web:97e94e0d063c075f047ebd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts(filter = null) {
  let q;
  if (filter) {
    q = query(
      collection(db, "products"),
      where(filter.name, "==", filter.value)
    );
  } else {
    q = collection(db, "products");
  }
  const results = await getDocs(q);
  // response es un query snapshot (similar a un array iterable)
  const prdList = [];
  results.docs.forEach((prd) => prdList.push({ id: prd.id, ...prd.data() }));
  return prdList;
}

export async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const result = await getDoc(docRef);
  return { id: result.id, ...result.data() };
}

// enviar una nueva orden de pedido
export async function addOrder(order) {
  const ordersCollection = collection(db, "orders");
  const docRef = await addDoc(ordersCollection, order);
  return docRef.id;
}

// actualizar un producto
export async function updateProduct(id, toUpdate) {
  const prdDoc = doc(db, "products", id);
  try {
    await updateDoc(prdDoc, toUpdate);
  } catch (error) {
    console.log("error" + error);
  }
}
