import React, { useEffect, useMemo } from "react";
import "./List.css";

let HighLow = [];
let HighMedium = [];
let HighHigh = [];
let MediumLow = [];
let MediumMedium = [];
let MediumHigh = [];
let LowLow = [];
let LowMedium = [];
let LowHigh = [];

function List(props) {
  // on everytime componet re-renders i manuvally do all arrays empty because every componet re-rerendrs i get the previous user data also using useEffect hook
  useEffect(() => {
    HighLow = [];
    HighMedium = [];
    HighHigh = [];
    MediumLow = [];
    MediumMedium = [];
    MediumHigh = [];
    LowLow = [];
    LowMedium = [];
    LowHigh = [];
  }, [props]);

  const array = props.userData;

  array.forEach((item) => {
    if (item.impact === "High" && item.probability === "Low") {
      HighLow.push(item.title);
    } else if (item.impact === "High" && item.probability === "Medium") {
      HighMedium.push(item.title);
    } else if (item.impact === "High" && item.probability === "High") {
      HighHigh.push(item.title);
    } else if (item.impact === "Medium" && item.probability === "Low") {
      MediumLow.push(item.title);
    } else if (item.impact === "Medium" && item.probability === "Medium") {
      MediumMedium.push(item.title);
    } else if (item.impact === "Medium" && item.probability === "High") {
      MediumHigh.push(item.title);
    } else if (item.impact === "Low" && item.probability === "Low") {
      LowLow.push(item.title);
    } else if (item.impact === "Low" && item.probability === "Medium") {
      LowMedium.push(item.title);
    } else if (item.impact === "Low" && item.probability === "High") {
      LowHigh.push(item.title);
    } else {
      return;
    }
  });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Low</td>
            <td>Medium</td>
            <td>High</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>High</td>
            <td className="high-low">
              {HighLow.map((e, i) => (
                <p key={`h${i}`}>{e}</p>
              ))}
            </td>
            <td className="high-medium">
              {HighMedium.map((e, i) => (
                <p key={`m${i}`}>{e}</p>
              ))}
            </td>
            <td className="high-high">
              {HighHigh.map((e, i) => (
                <p key={`s${i}`}>{e}</p>
              ))}
            </td>
          </tr>
          <tr>
            <td>Medium</td>
            <td className="medium-low">
              {MediumLow.map((e, i) => (
                <p key={`l${i}`}>{e}</p>
              ))}
            </td>
            <td className="medium-medium">
              {MediumMedium.map((e, i) => (
                <p key={`s${i}`}>{e}</p>
              ))}
            </td>
            <td className="medium-high">
              {MediumHigh.map((e, i) => (
                <p key={`s${i}`}>{e}</p>
              ))}
            </td>
          </tr>
          <tr>
            <td>Low</td>
            <td className="low-low">
              {LowLow.map((e, i) => (
                <p key={`s${i}`}>{e}</p>
              ))}
            </td>
            <td className="low-medium">
              {LowMedium.map((e, i) => (
                <p key={`s${i}`}>{e}</p>
              ))}
            </td>
            <td className="low-high">
              {LowHigh.map((e, i) => (
                <p key={`s${i}`}>{e}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;
