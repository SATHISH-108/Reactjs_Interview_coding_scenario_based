//practicing.jsx

// //without useMemo Hook

// import { useState } from "react";
// const Practicing = () => {
//   const [count, setCount] = useState(1);
//   const [nameInput, setNameInput] = useState("");
//   const expensiveFunction = (num) => {
//     console.log("Recalculating / expensive function calling");
//     for (let i = 1; i <= 1000000; i++) {
//       num += i;
//     }
//     return num;
//   };
//   const sum = expensiveFunction(10);

//   return (
//     <center>
//       <h2 style={{ color: "red" }}>Without useMemo Hook Example</h2>
//       <hr />
//       <hr />
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-evenly",
//           width: "100vw",
//           marginTop: "50px",
//         }}
//       >
//         <div>
//           <h4>ExpensiveFunction of sum : ${sum}</h4>
//         </div>
//         <div>
//           <h4>count : ${count}</h4>
//           <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="ENTER NAME"
//             onChange={(e) => setNameInput(e.target.value)}
//           />
//           <h4>Name : {nameInput}</h4>
//         </div>
//       </div>
//     </center>
//   );
// };
// export default Practicing;

// WithUseMemo Hook Example
import { useMemo, useState } from "react";
const WithUseMemoHook = () => {
  const [count, setCount] = useState(10);
  const [nameInput, setNameInput] = useState("");
  const sum = useMemo(() => expensiveFunction(count), [count]);
  function expensiveFunction(num) {
    console.log("UseMemo Hook Calculating");
    for (let i = 1; i <= 10000000; i++) {
      num += i;
    }
    return num;
  }
  return (
    <>
      <h1>With UseMemo Hook Example</h1>
      <hr />
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100vw",
          marginTop: "50px",
        }}
      >
        <div>
          <h4>Sum of an expensiveFunction is : {sum}</h4>
        </div>
        <div>
          <h4>Count : {count}</h4>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <div>
          <textarea
            rows="8"
            cols="40"
            type="text"
            placeholder="ENTER COMMENT HERE"
            onChange={(e) => setNameInput(e.target.value)}
          ></textarea>
          <h4>Name : {nameInput}</h4>
        </div>
      </div>
    </>
  );
};
export default WithUseMemoHook;
