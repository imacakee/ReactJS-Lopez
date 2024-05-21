import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavComponent from "./components/NavComponent";
import ItemList from "./components/items/ItemList";
import ItemDetail from "./components/items/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route exact path="/" element={<ItemList />} />
        <Route exact path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
