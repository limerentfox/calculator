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
      try {
        const evalResult = eval(input);
        setDisplayValue(String(evalResult));
        setInput(String(evalResult));
        setJustClickedOperator(false);
      } catch {
        setDisplayValue("Error");
      }
      return;
    }

    if (operators.includes(value)) {
      if (!input || operators.includes(input.slice(-1))) return;
      setInput(input + value);
      setJustClickedOperator(true);
      return;
    }

    const newInput = input + value;
    setInput(newInput);

    if (justClickedOperator) {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }

    setJustClickedOperator(false);
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
    "3",
    "2",
    "1",
    "+",
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
