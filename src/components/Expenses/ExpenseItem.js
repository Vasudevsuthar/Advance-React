import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  // console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!!");
    console.log(title);
  };

  const ChangeAmountHandler = () => {
    setAmount(100);
    console.log(amount);
  };

  const deleteHandler = () => {
    const ExpenseItem = document.querySelector(".expense-item");
    if (ExpenseItem) {
      ExpenseItem.remove();
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={ChangeAmountHandler}>Change Amount</button>
      <button onClick={deleteHandler}>Delete ExpenseItem</button>
    </Card>
  );
};

export default ExpenseItem;
