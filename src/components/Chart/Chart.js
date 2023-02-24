import React,{useEffect,useState} from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";


function Chart(props) {

  
 console.log("Inchart");
 console.log(props.dataPoints);
 const dataPointValue = props.dataPoints.map(data => { 
    console.log("data", data);
    return data.value
  });
  const totalMaxValue = Math.max(...dataPointValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key = {dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
