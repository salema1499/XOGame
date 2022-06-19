//import React, { Component } from "react";
// import ReactDom from "react-dom";
import "../index.css";
import { useLocation } from "react-router-dom";
import img from "../assets/images/xo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
   
//const location = useLocation();
// function loi(){
//   location.state(
//     playyerone :player1,
//         playyertwo :player2
//   )
// }
  

    

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// class Square extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           this.props.onClick()
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

function Board() {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: false,
  });

  const location = useLocation()
  console.log(location.state.playyerone);
 

  // const {state} = useLocation();
//const { playyerone:", playyerone } = status;


  const handleClick = (i) => {
    //shallow copy from squares state
    //const hh={squares:Array(9).fill(null),xIsNext:true}}

    const squareCopy = state.squares.slice();

    if (calculateWinner(squareCopy) || squareCopy[i]) {
      return;
    }

    squareCopy[i] = state.xIsNext ? "x" : "o";
    setState({
      squares: squareCopy,
      xIsNext: !state.xIsNext,
    });
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
  };

  //const status = `Next Player :${this.state.xIsNext ? "x" : "o"}`

  const winner = calculateWinner(state.squares);
  let status;
  if (winner) {
    status = `Winner ${state.xIsNext ? location.state.playyerone : location.state.playyertwo}`;
  } else {
    status = `Next Player ${state.xIsNext ? location.state.playyerone : location.state.playyertwo}`;
  }

  function playAgin() {
    setState({ squares: Array(9).fill(null), xIsNext: false });
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      <button className="playAgin" onClick={playAgin}>
        playAgin
      </button>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <img src={img} className="img" alt="" />
      <div className="game-bord">
        <Board />
      </div>
      <div className="game-info">
        <div>
          {/* status*/}
          {/* TODO*/}
        </div>
      </div>
      <button className="backButton">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Back TO Home
        </Link>
      </button>
    </div>
  );
}

export default Game;

// ReactDom.render(<Game />, realDom);
