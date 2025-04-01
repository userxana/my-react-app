// function Square({ value }) {
//   return <button className="square">{value}</button>;
// }


// React Developer Tools


import { useState } from 'react';

function Square() {

  // value stores the value and setValue is a function that can be used to change the value. 
  // The null passed to useState is used as the initial value for this state variable, 
  // so value here starts off equal to null
  const [value, setValue] = useState(null);

  // If you click on a square now, you should see a log saying "clicked!" in the Console 
  function handleClick() {
    setValue('X');
  }
  return (
  <button
    className="square"
    onClick={handleClick}
  >
    {value}
  </button>
  );
}


export default function Board() {
  // className="square" is a button property or prop that tells CSS how to style the button
  // return <button className="square">X</button>;

  // you can use Fragments (<> and </>) to wrap multiple adjacent JSX elements
  // The return JavaScript keyword means whatever comes after is returned as a value to the caller of the function.
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}


// export default function Board() {
//   return (
//     <>
//       <div className="board-row">
//         <Square value="1" />
//         <Square value="2" />
//         <Square value="3" />
//       </div>
//       <div className="board-row">
//         <Square value="4" />
//         <Square value="5" />
//         <Square value="6" />
//       </div>
//       <div className="board-row">
//         <Square value="7" />
//         <Square value="8" />
//         <Square value="9" />
//       </div>
//     </>
//   );
// }

