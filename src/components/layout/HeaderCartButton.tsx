import CartIcon from "../common/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: any) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCartButton;

