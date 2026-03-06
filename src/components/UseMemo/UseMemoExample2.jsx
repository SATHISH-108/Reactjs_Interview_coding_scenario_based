//UseMemoExample2.jsx

//With USEMEMO HOOK (Code with Harry)
import { useMemo, useState } from "react";
const UseMemoExample2 = () => {
  const [count, setCount] = useState(0);
  const sum = useMemo(() => expensiveFunction(count), [count]);
  // expensiveFunction will run only when count changes
  function expensiveFunction(num) {
    console.log("useMemo Hook Calling..");
    for (let i = 0; i <= 10000000; i++) {
      num += 1;
      // console.log(num); // don't console.log inside the loop - it will slow everything down.
    }
    return num;
  }

  return (
    <div>
      <p>UseMemo Hook Example 2</p>
      <p>sum of expensiveFunction: {sum}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default UseMemoExample2;
