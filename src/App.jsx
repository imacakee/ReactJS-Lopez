import { useState } from "react";
import NavComponent from "./components/NavComponent";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavComponent />

      <ItemListContainer />
    </>
  );
}

export default App;
