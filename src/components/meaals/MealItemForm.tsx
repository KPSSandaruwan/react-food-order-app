import React, { useRef, useState } from "react";
import Input from "../common/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm: React.FC<{ id: string, onAddToCart: (enteredAmount: number) => void }> = (props) => {
  const amountInputRef: any = useRef();
  const [isAmountValid, setIsAmountValid] = useState<boolean>(true);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNo: number = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNo < 1 ||
      enteredAmountNo > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNo);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
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
      {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
