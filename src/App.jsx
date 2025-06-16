import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [justClickedOperator, setJustClickedOperator] = useState(false);

  const operators = ["+", "-", "*", "/", "%"];

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setDisplayValue("");
      setJustClickedOperator(false);
      return;
    }

    if (value === "=") {
      const evalResult = eval(input);
      setDisplayValue(String(evalResult));
      setInput(String(evalResult));
      setJustClickedOperator(false);
    }

    if (operators.includes(value)) {
      const newInput = input + value;
      setInput(newInput);
      setJustClickedOperator(true);
    } else {
      const newInput = input + value;
      setInput(newInput);

      if (justClickedOperator) {
        setDisplayValue(value);
      } else {
        setDisplayValue((prev) => prev + value);
      }

      setJustClickedOperator(false);
    }
  };

  const buttons = [
    "AC",
    "+/",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="grid-container">
      <div className="answer">{displayValue}</div>
      <div className="grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
