import NavComponent from "./components/NavComponent";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavComponent />
      <ItemListContainer greeting="Welcome!!" />
    </>
  );
}

export default App;
