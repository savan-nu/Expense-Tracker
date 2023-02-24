import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
   console.log("Expenslist");
   console.log(props.items.length);
  if(props.items.length === 0)  {
    return  <h2 className="expenses-list__fallback">No Expense Found !!</h2>;
  }
  return (
    <ul className="expenses-list">
      {/* {props.items.map((expens) => (
        <ExpenseItem
          key={expens.id}
          title={expens.title}
          amount={expens.amount}
          date={expens.date}
        ></ExpenseItem>
      ))} */}
    </ul>
  );
}

export default ExpensesList;
