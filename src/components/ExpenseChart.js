import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Chart from "./Chart/Chart";

function ExpenseChart(props) {
  const { expenses } = props;
  const [loading, setLoading] = useState(true);
  // window.addEventListener("load", () => setLoading(true));
  const [chartDataPoints, setChartDataPoints] = useState([
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ]);

  useEffect(() => {
    const getchat = async function (expenses) {
      const localchartDatapoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
      ];
      for (const expens of expenses) {
        console.log("Expense");
        console.log(expens);
        const expenseMonth = expens.date.getMonth();
        const from = expens.curr;
        // chartDataPoints[expenseMonth].value += expens.amount;
        const res = await fetch(
          `https://api.exchangerate.host/convert?from=${from}&to=USD&amount=${expens.amount}`
        );
        const data = await res.json();
        console.log("data   jdf");
        console.log(data.result);
        // localchartDatapoints[expenseMonth]
        localchartDatapoints[expenseMonth].value += data.result;
        console.log("value", localchartDatapoints[expenseMonth].value);
      }
      console.log("hello");
      setChartDataPoints(localchartDatapoints);
    };

    setLoading(true);
    getchat(expenses);
    setLoading(false);
  }, [expenses]);
  // loading ? <> </> : getchat();
  // console.log("Loading start");
  // console.log(loading);
  // getchat();

  // console.log("loading");
  // console.log(loading);
  // console.log(chartDataPoints);
  //  setdatapoint(chartDataPoints)
  // isTrue(props,chartDataPoints);
  return loading ? (
    <div className="chart">
      <ClipLoader color="#40005d" size={150} aria-label="Loading Spinner" />
    </div>
  ) : (
    <Chart dataPoints={chartDataPoints} />
  );
}

export default ExpenseChart;
