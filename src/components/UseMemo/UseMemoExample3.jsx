// //Without UseMemo Hook
// const UseMemoExample3 = () => {
//   const [count, setCount] = useState(1);
//   const [text, setText] = useState("");
//   const expensiveFunction = (num) => {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   };
//   const factorial = expensiveFunction(5);

//   return (
//     <div>
//       <p>useMemo Example 3</p>
//       <hr />
//       <h4>
//         Factorial of {count} is : {factorial}
//       </h4>
//       <h4>Name : {text}</h4>
//       <div>
//         <input
//           type="text"
//           placeholder="Type Something..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         &nbsp; &nbsp;
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     </div>
//   );
// };
// export default UseMemoExample3;

//with useMemo Hook with factorial example
import React, { useMemo, useState } from "react";

const UseMemoExample3 = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const factorial = useMemo(() => {
    console.log(`useMemo Hook is Called ${count} times`);
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }, [count]);
  return (
    <div>
      <h1>UseMemo with Factorial Example</h1>
      <hr />
      <hr />
      <h3>
        Factorial of {count} is : {factorial}
      </h3>
      <h3>Name : {text}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseMemoExample3;
