import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Base from "./components/Base";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const initialState = { base: "", toppings: [] };
  const [pizza, setPizza] = useState(initialState);
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="base" element={<Base addBase={addBase} pizza={pizza} />} />
      </Routes>
    </div>
  );
}

export default App;
