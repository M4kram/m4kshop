import Add from "./Components/Add";
import Products from "./Components/Products";
import Summary from "./Components/Summary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Summary />
      <Add />
      <Products />
    </div>
  );
}

export default App;
