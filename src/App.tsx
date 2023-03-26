import React, { memo, useRef, useState } from "react";
import NumberPad from "./components/NumberPad";
import Display from "./components/Display";
import "./styles.css"
import SpecialOperations from "./components/SpecialOperations";
import MemoryFunctions from "./components/MemoryFunctions";
import AdvancedFunctions from "./components/AdvancedFunctions";
import Button from "./components/Button";
import History from "./components/History";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [storedValue, setStoredValue] = useState("");
  const [operator, setOperator] = useState("");
  const history = useRef<string[]>([]);
  const [renderHistoryModal, setRenderHistoryModal] = useState<boolean>(false);
  const [memory, setMemory] = useState<number>(0);

  const handleNumberClick = (number: string) => {
    if (displayValue === "0" || operator) {
      setDisplayValue(number);
    } else {
      setDisplayValue((prev) => prev + number);
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue((prev) => prev + ".");
    }
  };

  const handleOperatorClick = (currOperator: string) => {
    if (!operator) {
      setOperator(currOperator);
      setStoredValue(displayValue);
      setDisplayValue("0");
    } else {
      console.log(storedValue + "::" + operator + "::" + displayValue + "::" + currOperator);
      if (storedValue) {
        setDisplayValue(evaluateExpression().toString());
      }
      setOperator(currOperator);
      setStoredValue(displayValue);
      console.log("new: " + storedValue + "::" + operator + "::" + displayValue + "::" + currOperator);
    }

  

    
  };

  const handleEqualClick = () => {
    let result = evaluateExpression()
    setDisplayValue(result.toString());
    setStoredValue("");
    setOperator("");
    addToHistory(`${storedValue} ${operator} ${displayValue} = ${result}`);
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setStoredValue("");
    setOperator("");
  };

  function evaluateExpression(): number {
    const currentValue = parseFloat(displayValue);
    const storedValueParsed = parseFloat(storedValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = storedValueParsed + currentValue;
        break;
      case "-":
        result = storedValueParsed - currentValue;
        break;
      case "*":
        result = storedValueParsed * currentValue;
        break;
      case "/":
        result = storedValueParsed / currentValue;
        break;
      case "^":
        result = Math.pow(storedValueParsed, currentValue);
        break;
        case "v":
          result = Math.pow(storedValueParsed, 1/currentValue);
          break;
      default:
        break;
    }

    return result;
  }
  

  function addToHistory(historyItem: string) {
    history.current.push(historyItem);
  }

  function handleHistoryButton(): void {
    setRenderHistoryModal(!renderHistoryModal)
  }

  function handleDisplayInput(): void {
    console.log(displayValue);
  }
  

  function evaluatePecentage(): void {
    console.log((parseFloat(displayValue) / 100).toString());
    setDisplayValue(prev => (Math.abs(parseFloat(prev) / 100)).toString());
  }

  return (
    <div style={{backgroundColor:"orange"}}>
      <div>
        <h1>React Calculator</h1>
      </div>
      <Button label="History" onClick={handleHistoryButton} />
      {renderHistoryModal && (
        <div className="modal">
          <History history={ history.current } />
          <button onClick={handleHistoryButton}>Close</button>
          </div>
      )}

    <div className="calculator">
      <div className="display-container">
        <Display value={displayValue} onChange={handleDisplayInput} />
      </div>
        <div className="number-pad-container">
        <MemoryFunctions
            onMemoryAdd={function (): void {
              console.log(displayValue);
              setMemory(prev => prev + parseFloat(displayValue));
            }}
            onMemorySubtract={function (): void {
              setMemory(prev => prev - parseFloat(displayValue));
              console.log(memory);
            }}
            onMemoryClear={function (): void {
              setMemory(0);
            }}
            onMemoryRecall={function (): void {
              setDisplayValue(memory.toString());
            }}
          />
          <AdvancedFunctions calcPercentage={evaluatePecentage}
            onOperatorClick={handleOperatorClick} />
          <SpecialOperations
            handleClearClick={handleClearClick}
          />
          <NumberPad
          handleNumberClick={handleNumberClick}
          handleDecimalClick={handleDecimalClick}
          onOperatorClick={handleOperatorClick}
          onEqualClick={handleEqualClick}
          />

      </div>
      </div>
      </div>
  );
  
}

export default App;
