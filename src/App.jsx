import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavComponent from "./components/NavComponent";
import ItemList from "./components/items/ItemList";
import ItemDetail from "./components/items/ItemDetail";
import { CartProvider } from "./components/context/CartContext";
import CartDetail from "./components/cart/CartDetail";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route exact path="/" element={<ItemList />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route exact path="/cart" element={<CartDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
