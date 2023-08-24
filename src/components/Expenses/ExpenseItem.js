import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!!')
  };

  const deleteHandler = () => {
    const ExpenseItem = document.querySelector(".expense-item");
    if(ExpenseItem){
      ExpenseItem.remove();
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete ExpenseItem</button>
    </Card>
  );
}

export default ExpenseItem;
