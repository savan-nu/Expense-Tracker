import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React from 'react';

function ExpenseItem(props) {
  console.log(props.curr);
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.curr} : {props.amount}</div>
      </div>
      
    </div>
  );
}

export default ExpenseItem;