import React from "react";
import mealImg from "../../assets/img/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header: React.FC<{onShowCart: () => void}> = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OrderMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Meal_image_header" />
      </div>
    </React.Fragment>
  );
};

export default Header;
