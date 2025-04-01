// function Square({ value }) {
//   return <button className="square">{value}</button>;
// }


// React Developer Tools

import { useState } from 'react';


// Square component to receive the value prop from the Board component. 
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);


  // The parent component can pass that state back down to the children via props. 
  // This keeps the child components in sync with each other and with their parent.
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {

    // check if the square is already filled
    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }


    // nextSquares[i] = "X";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

  }

  // className="square" is a button property or prop that tells CSS how to style the button
  // return <button className="square">X</button>;

  // you can use Fragments (<> and </>) to wrap multiple adjacent JSX elements
  // The return JavaScript keyword means whatever comes after is returned as a value to the caller of the function.

  // function calls square which checks props for value and on square click which changes
  // state from null to X in the main squares array and for the correct square order

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// function Square() {

//   // value stores the value and setValue is a function that can be used to change the value. 
//   // The null passed to useState is used as the initial value for this state variable, 
//   // so value here starts off equal to null
//   const [value, setValue] = useState(null);

//   // If you click on a square now, you should see a log saying "clicked!" in the Console 
//   function handleClick() {
//     setValue('X');
//   }
//   return (
//   <button
//     className="square"
//     onClick={handleClick}
//   >
//     {value}
//   </button>
//   );
// }


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

