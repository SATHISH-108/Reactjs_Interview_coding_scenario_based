// import React, { useMemo, useState } from "react";

// const index = () => {
//   const [count, setCount] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const square = useMemo(() => {
//     console.log("UseMemo Hook is called");
//     return count * count;
//     //return (count * count);
//   }, [count]);
//   return (
//     <div>
//       <h1>UseMemo Hook Example </h1>
//       <h4>Count : {count}</h4>
//       <p>count of Square is : {square}</p>
//       <p>status : {isActive ? "Active" : "InActive"}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setIsActive(!isActive)}>Active / InActive</button>
//     </div>
//   );
// };

// export default index;

import React, { useMemo, useState } from "react";

const UseMemoExample1 = () => {
  const [count, setCount] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const square = useMemo(() => {
    console.log(`useMemo Hook called`);
    return count * count;
  }, [count]);
  return (
    <div>
      <h4>UseMemo hook Example</h4>
      <p>Count : {count}</p>
      <p>
        Square root of {count} is : {square}
      </p>
      <p>Status : {isActive ? "Active" : "InActive"}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => count >= 1 && setCount(count - 1)}>
          Decrement
        </button>
      </div>
      <br />
      <button onClick={() => setIsActive(!isActive)}>Active / InActive</button>
    </div>
  );
};

export default UseMemoExample1;

// //Without USEMEMO Hook (Code with Harry)
// import React from "react";

// const UseMemoExample2 = () => {
// //expensiveFunction will run on every render
//   const expensiveFunction = (num) => {
//     console.log("Calculating");
//     //1Cr
//     for (let i = 0; i <= 10000000; i++) {
//       num += i;
//       // console.log(num); // don't console.log inside the loop - it will slow everything down.
//     }
//     return num;
//   };
//   let sum = expensiveFunction(10);
//   return (
//     <div>
//       <p>Without UseMemo Hook Example2</p>
//       <p>Expensive Function of sum : {sum}</p>
//     </div>
//   );
// };

// export default UseMemoExample2;
