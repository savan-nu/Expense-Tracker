import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm({ onSaveExpensenData ,expenseUse }) {
  const [enterTittle, setenterTitle] = useState("");
  const [enterAmount, setenterAmout] = useState("");
  const [enterDate, setenterDate] = useState("");
  const [entercurr,setcurr] = useState('USD');
  const currencies = [
    'USD',
    'INR',
    'EUR',
    'JPY',
    'GBP',
    'CAD',
    'AUD',
    'CHF',
    'CNY',
    'SEK',
    'NZD'
  ];
  
  const handleOnchange = (event) => setenterTitle(event.target.value);
  const amountChangeHandler = (event) => setenterAmout(event.target.value);
  const dateChangeHandler = (event) => {
   
    setenterDate(event.target.value);
  };
  const handleSubmit = (event) => {

    event.preventDefault();
    const expenseData = {
      title: enterTittle,
      date: new Date(enterDate),
      amount: enterAmount,
      curr : entercurr
    };
  
    setenterAmout("");
    setenterDate("");
    setenterTitle("");
    onSaveExpensenData(expenseData);
  };

  // const getCurrency = async function(){
  //   const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  //   const data = await res.json();
  //   const arr = Object.keys(data.rates);
    
  // }
  //  getCurrency();
  // console.log("curr");
  // console.log(currencies);
  const handleDropDown = function(event){
 
      setcurr(event.target.value);
  }
  
  
  



  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enterTittle} onChange={handleOnchange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control" onChange={dateChangeHandler}>
          <label>Date</label>
          <input type="date" value={enterDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
        
        <select id="myDropdown" onChange={handleDropDown} >
          {
            currencies.map(cur => {
              return <option value={cur}>
                {cur}
              </option>
            })
          }
        </select>
        {/* {
          dropdown = document.getElementById("myDropdown")
 
          for (var i = 0; i < currencies.length; i++) {
            var option = document.createElement("option");
            option.text = currencies[i];
            dropdown.add(option);
          }
        } */}
      </div>
    </form>
  );
}

export default ExpenseForm;
