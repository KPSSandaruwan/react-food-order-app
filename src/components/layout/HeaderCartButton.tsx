import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../common/CartIcon";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton: React.FC<{ onClick: () => void }> = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes.bump}`

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
