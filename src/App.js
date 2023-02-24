import { useState } from "react";
import Expenses from "./components/Expenses";
import Pratice from "./components/Pratice";
import NewExpense from "./components/NewExpense/NewExpense";
const expenses = [];
function App() {
  const [sample, setsample] = useState(110);
  const [expenseUse, setexpenseUse] = useState(expenses);
  const addExpensenHandler = function (expense) {
    setexpenseUse((prev) => {
      return [expense, ...prev];
    });
  };
  const data = { ...localStorage };

  let inital = Object.values(data).map((exp) => JSON.parse(exp)); //(2) [{…}, {…}]
  inital = inital.map((exp) => {
    exp.date = new Date(exp.date);
    return exp;
  });
  // console.log("inital");
  // console.log(inital);

  return (
    <div>
      <NewExpense onAddExpense={addExpensenHandler} expenseUse={expenseUse} />
      {inital.length > 0 ? <Expenses items={inital}></Expenses> :<>, <Expenses items={expenseUse} /></>}
      
      {/* {sample} 
      
      {/* <Pratice sample={sample} setsample={setsample} add = {add} /> */}
      {/* {add.id} */}

      {/* this is app {val} , {value} */}
    </div>
  );
}

export default App;
