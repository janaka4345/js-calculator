// "use client";
// import React, { useEffect, useState } from "react";

// export default function page() {
//   const [digit, setDigit] = useState("0");
//   const [numArr, setNumArr] = useState([]);
//   const [opArr, setOpArr] = useState([]);
//   const [result, setResult] = useState("0");
//   const [output, setOutput] = useState(false);

//   useEffect(() => {
//     digit === "0" ? setResult("0") : setResult(digit);
//     console.log("ran");
//   }, [digit]);

//   useEffect(() => {
//     console.log("==", numArr);

//     console.log("==", opArr);
//     let str = "";
//     numArr.map((val, i) => {
//       str += val + opArr[i];
//     });
//     str += digit;
//     console.log(str, "=");
//     setDigit(eval(str.substring(0, str.length - 1)));

//     console.log("result=", result);
//   }, [output]);

//   function handleNumberClick(number) {
//     // if (digit === "0" && number === "0") {
//     //   return;
//     // }
//     digit === "0" ? setDigit(number) : setDigit((prev) => prev + number);
//     console.log(number);
//   }
//   function handleOperation(operator) {
//     setNumArr((prev) => [...prev, digit]);
//     setOpArr((prev1) => [...prev1, operator]);
//     setDigit("");
//     console.log(operator);
//   }
//   function handleClear() {
//     setDigit("0");
//     setOpArr([]);
//     setNumArr([]);
//     setResult(0);
//     console.log("clear");
//   }
//   function handleOutput() {
//     handleOperation("=");
//     setOutput(!output);
//   }
//   function handleDotClick() {
//     if (!digit.includes(".")) {
//       handleNumberClick(".");
//     }
//     console.log(".clicked");
//   }

//   return (
//     <div>
//       <div className="w-1/3 mx-auto items-center h-[480px] gap-3 p-3 grid grid-cols-4 border">
//         <div id="display" className="col-span-3">
//           <h1>{result}</h1>
//           {/* <h1>{numArr}</h1> */}
//         </div>
//         <button
//           id="clear"
//           className=" items-center col-span-2 justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={handleClear}
//         >
//           C
//         </button>
//         <button
//           id="divide"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleOperation("/")}
//         >
//           /
//         </button>
//         <button
//           id="multiply"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleOperation("*")}
//         >
//           *
//         </button>
//         <button
//           id="seven"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("7")}
//         >
//           7
//         </button>
//         <button
//           id="eight"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("8")}
//         >
//           8
//         </button>
//         <button
//           id="nine"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("9")}
//         >
//           9
//         </button>
//         <button
//           id="subtract"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleOperation("-")}
//         >
//           -
//         </button>
//         <button
//           id="four"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("4")}
//         >
//           4
//         </button>
//         <button
//           id="five"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("5")}
//         >
//           5
//         </button>
//         <button
//           id="six"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("6")}
//         >
//           6
//         </button>
//         <button
//           id="add"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleOperation("+")}
//         >
//           +
//         </button>
//         <button
//           id="one"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("1")}
//         >
//           1
//         </button>
//         <button
//           id="two"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("2")}
//         >
//           2
//         </button>
//         <button
//           id="three"
//           className=" items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("3")}
//         >
//           3
//         </button>
//         <button
//           id="equals"
//           className=" row-span-2 items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={handleOutput}
//         >
//           =
//         </button>
//         <button
//           id="zero"
//           className="col-span-2  items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleNumberClick("0")}
//         >
//           0
//         </button>
//         <button
//           id="decimal"
//           className="items-center justify-center w-full h-full  text-sm font-medium text-gray-900 rounded-lg bg-blue-500 hover:bg-purple-600 hover:text-white   focus:outline-none focus:ring-blue-300 "
//           onClick={() => handleDotClick()}
//         >
//           .
//         </button>
//       </div>
//     </div>
//   );
// }
