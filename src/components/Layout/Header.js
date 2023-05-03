import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>chowBites</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Long table with delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
