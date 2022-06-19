import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={Play} />
      </Switch>
    </Router>
  );
}

export default App;


const realDom = document.getElementById("root");
const root = ReactDom.createRoot(realDom);
root.render(<App />);


// import React, { Component } from "react";
// import ReactDom from "react-dom";
// import "./index.css";
// // import "../public/xo.jpg"

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// // class Square extends Component {
// //   // constructor(props) {
// //   //   super(props);
// //   //   this.state = {
// //   //     value: null,
// //   //   };
// //   // }
// //   render() {
// //     return (
// //       <button
// //         className="square"
// //         onClick={() => {
// //           this.props.onClick()
// //         }}
// //       >
// //         {this.props.value}
// //       </button>
// //     );
// //   }
// // }
// const Square=(props)=>{
//   return(
//     <button className="square"
//     onClick={props.onClick}>{props.value}</button>
//   )
// }

// class Board extends Component {

// constructor(props){
//   super(props)
//   this.state={
//     squares :Array(9).fill(null),xIsNext:true
//   }
// }

// handleClick(i){
//   //shallow copy from squares state
//   const squareCopy =this.state.squares.slice()
//   if (calculateWinner(squareCopy) || squareCopy[i]){
//     return
//   }

//   squareCopy[i]=this.state.xIsNext ? "x":"o"
//   this.setState({
//     squares :squareCopy,
//     xIsNext:!this.state.xIsNext
//   })
// }

//   renderSquare(i) {
//     return <Square value={this.state.squares[i]}
//       onClick={()=>{
//         this.handleClick(i)
//       }}

//     />;
//   }

//   render() {
//     // const status = `Next Player :${this.state.xIsNext ? "x" : "o"}`
//     const winner =calculateWinner(this.state.squares)
//     let status
//     if (winner){
//       status =`Winner ${winner}`

//     }else{
//       status=`Next Player ${this.state.xIsNext ? "x" :"o"}`
//     }

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends Component {
//   render() {
//     return (
//       <div className="game">
//           <img src="xo.jpg" className="img"/>
//         <div className="game-bord">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>
//             {/* status*/}
//             {/* TODO*/}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

