import React from "react";
import classes from "./Input.module.css";

const Input: React.FC<{ label: string; input: any, ref: any }> = React.forwardRef(
  (props, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
    );
  }
);

export default Input;
