import React from "react";
import mealImg from "../../assets/img/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OrderMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Meal_image_header" />
      </div>
    </React.Fragment>
  );
};

export default Header;
