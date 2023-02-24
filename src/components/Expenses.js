import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
     <ExpenseChart expenses = {props.items}/>
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expense Found !!</h2>
      ) : (
        <ul className="expenses-list ">
          {props.items.map((expens) => (
            <ExpenseItem
              key={expens.id}
              title={expens.title}
              amount={expens.amount}
              date={expens.date}
              curr = {expens.curr}
            ></ExpenseItem>
          ))}{" "}
        </ul>
      )}
    </Card>
  );
}

export default Expenses;
