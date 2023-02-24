import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense({onAddExpense,expenseUse}) {
  const handleExpenseData = (event) => {
   
    const exData = {
      ...event,
      id : Math.random().toString()
    }
    localStorage.setItem(exData.id , JSON.stringify(exData));  
    onAddExpense(exData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensenData={handleExpenseData} expenseUse = {expenseUse}/>
    </div>
  );
}

export default NewExpense;
