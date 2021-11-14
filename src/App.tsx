import React, { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meaals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  };
  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
