"use client";
import React, { useState } from "react";

export default function page() {
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(false);
  const [operator, setOperator] = useState(null);
  const [output, setOutput] = useState("0");
  const [input, setInput] = useState("0");

  const handleNumberClick = (digit) => {
    if (output === "0" && digit === "0") {
      return;
    }
    if (secondNum) {
      setOutput(String(digit));
      setSecondNum(false);
    } else {
      setOutput(output === "0" ? String(digit) : output + digit);
    }
    setInput(input === "0" ? digit : input + digit);
  };

  const handleDotClick = () => {
    if (!output.includes(".")) {
      setOutput(output + ".");
      setInput(input + ".");
    }
  };

  const handleOperation = (newOperator) => {
    const inputValue = parseFloat(output);

    if (firstNum === null) {
      setFirstNum(inputValue);
    } else if (operator) {
      const result = calculate();
      setOutput(String(result));
      setFirstNum(result);
    }

    setSecondNum(true);
    setOperator(newOperator);
    setInput(input + newOperator);
  };

  const calculate = () => {
    const inputValue = parseFloat(output);

    switch (operator) {
      case "+":
        return firstNum + inputValue;
      case "-":
        return firstNum - inputValue;
      case "*":
        return firstNum * inputValue;
      case "/":
        return firstNum / inputValue;
      default:
        return inputValue;
    }
  };

  const handleOutput = () => {
    const result = calculate();
    setOutput(String(result));
    setFirstNum(result);
    setOperator(null);
    setSecondNum(false);
    // setInput(input + "=" + result);
    setInput(result);
  };

  const handleClear = () => {
    setOutput("0");
    setFirstNum(null);
    setOperator(null);
    setSecondNum(false);
    setInput("0");
  };

  return (
    <div>
      <div className="w-1/3 mx-auto items-center h-[480px] gap-3 p-3 grid grid-cols-4 border">
        <div className="col-span-4 ">
          {input != "0" ? input : "0"}

          <div id="display" className="text-green-400">
            {output}
          </div>
        </div>
        <button
          id="clear"
          className=" items-center col-span-2 justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={handleClear}
        >
          C
        </button>
        <button
          id="divide"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleOperation("/")}
        >
          /
        </button>
        <button
          id="multiply"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleOperation("*")}
        >
          *
        </button>
        <button
          id="seven"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          id="eight"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          id="nine"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          id="subtract"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleOperation("-")}
        >
          -
        </button>
        <button
          id="four"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          id="five"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          id="six"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          id="add"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleOperation("+")}
        >
          +
        </button>
        <button
          id="one"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          id="two"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          id="three"
          className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          id="equals"
          className=" row-span-2 items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={handleOutput}
        >
          =
        </button>
        <button
          id="zero"
          className="col-span-2  items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button
          id="decimal"
          className="items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
          onClick={handleDotClick}
        >
          .
        </button>
      </div>
    </div>
  );
}
