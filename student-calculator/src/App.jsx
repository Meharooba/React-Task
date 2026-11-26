import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  function calculate() {
    const a = Number(num1);
    const b = Number(num2);

    if (operator === "+") setResult(a + b);
    else if (operator === "-") setResult(a - b);
    else if (operator === "*") setResult(a * b);
    else if (operator === "/") setResult(b !== 0 ? a / b : "Cannot divide by zero");
  }

  function clearCalculator() {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => setOperator("+")}>+</button>
        <button onClick={() => setOperator("-")}>-</button>
        <button onClick={() => setOperator("*")}>×</button>
        <button onClick={() => setOperator("/")}>÷</button>
      </div>

      <p>Selected Operator: {operator}</p>

      <button className="calculate" onClick={calculate}>
        Calculate
      </button>

      <h2>Result: {result}</h2>

      <button className="clear" onClick={clearCalculator}>
        Clear
      </button>
    </div>
  );
}

export default App;