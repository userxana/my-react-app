// function Square({ value }) {
//   return <button className="square">{value}</button>;
// }


function Square({ value }) {
  return <button className="square">{value}</button>;
}


export default function Board() {
  // className="square" is a button property or prop that tells CSS how to style the button
  // return <button className="square">X</button>;

  // you can use Fragments (<> and </>) to wrap multiple adjacent JSX elements
      // The return JavaScript keyword means whatever comes after is returned as a value to the caller of the function.
      return (
        <>
            <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
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

