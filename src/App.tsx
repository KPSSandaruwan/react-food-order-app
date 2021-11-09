import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Meals from "./components/meaals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
