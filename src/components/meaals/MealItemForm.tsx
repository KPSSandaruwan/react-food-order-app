import React from "react";
import Input from "../common/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm: React.FC<{id: string}> = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label={"Amount"}
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
