//1. Pass Data From Child to Parent
import { useState } from "react";
const Parent = () => {
  const [userName, setUserName] = useState("");
  const submitHandler = (name) => {
    setUserName(name);
  };
  return (
    <center>
      <h3>Parent Component</h3>
      <p>UseName : {userName}</p>
      <hr />
      <hr />
      <br />
      <Child onSubmit={submitHandler} />
    </center>
  );
};
const Child = ({ onSubmit }) => {
  const [name, setName] = useState("");
  return (
    <center>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      &nbsp; &nbsp;
      <input
        type="button"
        value="PassDataToParent"
        onClick={() => onSubmit(name)}
      />
    </center>
  );
};
export default Parent;

// //2.
// const Parent = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <center>
//       <p>Parent</p>
//       <p>Count : {count}</p>
//       <hr />
//       <hr />
//       <br />
//       <Child count={count} setCount={setCount} />
//     </center>
//   );
// };
// const Child = ({ count, setCount }) => {
//   return (
//     <center>
//       <button onClick={() => setCount(count + 1)}>Imcrement +1</button>&nbsp;
//       &nbsp;
//       <button
//         onClick={() => {
//           if (count >= 1) {
//             setCount(count - 1);
//           }
//         }}
//       >
//         Decrement -1
//       </button>
//     </center>
//   );
// };
// export default Parent;

// //3.
// const Parent = () => {
//   const [message, setMessage] = useState("");
//   const nameHandler = (data) => {
//     setMessage(data);
//   };
//   return (
//     <div>
//       <h3>Parent</h3>
//       <p>Name : {message}</p>
//       <hr />
//       <hr />
//       <br />
//       <Child onName={nameHandler} />
//     </div>
//   );
// };
// const Child = ({ onName }) => {
//   return (
//     <div>
//       <button onClick={() => onName("Sathya")}>SendToParent</button>
//     </div>
//   );
// };
// export default Parent;
