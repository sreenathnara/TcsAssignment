import React from "react";
import "./List.css";
// import Form from "./Form";

const HighLow = [];
const HighMedium = [];
const HighHigh = [];
const MediumLow = [];
const MediumMedium = [];
const MediumHigh = [];
const LowLow = [];
const LowMedium = [];
const LowHigh = [];

console.log(HighLow, "highlow");
console.log(HighMedium, "highmedium");

export default function List(props) {
  console.log(props.ranga, "this array data");
  const array = props.ranga;
  console.log(array);
  array.forEach((e) => {
    const item = e.data;
    console.log(item, "item");
    console.log(item);
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
      HighLow.push(item.title);
    } else if (item.impact === "Low" && item.probability === "Medium") {
      HighMedium.push(item.title);
    } else if (item.impact === "Low" && item.probability === "High") {
      HighHigh.push(item.title);
    } else {
      return "ranga";
    }
  });
  // const [formdata,setFormdata]=useState([])
  console.log(props.ranga, "this is form data");
  console.log(props);
  console.log(props.name);
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
              {HighLow.map((e) => (
                <p>{e}</p>
              ))}
            </td>
            <td className="high-medium">
              {HighMedium.map((e) => (
                <p>{e}</p>
              ))}
            </td>
            <td className="high-high">
              {HighHigh.map((e) => (
                <p>{e}</p>
              ))}
            </td>
          </tr>
          <tr>
            <td>Medium</td>
            <td className="medium-low">
              {MediumLow.map((e) => (
                <p>{e}</p>
              ))}
            </td>
            <td className="medium-medium">
              {MediumMedium.map((e) => (
                <p>{e}</p>
              ))}
            </td>
            <td className="medium-high">
              {MediumHigh.map((e) => (
                <p>{e}</p>
              ))}
            </td>
          </tr>
          <tr>
            <td>Low</td>
            <td className="low-low">
              {LowLow.map((e) => (
                <p>{e}</p>
              ))}
            </td>
            <td className="low-medium">
              {LowMedium.map((e) => (
                <p>{e}</p>
              ))}
            </td>
            <td className="low-high">
              {LowHigh.map((e) => (
                <p>{e}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
