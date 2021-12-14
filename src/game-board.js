import React from "react";
import "./tic-tac-toe.css";
import Square from "./square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  }

  render() {
    let allSquares = [];
    let counter = 0;
    for (let i = 0; i < 3; i++) {
      let columns = [];
      for (let j = 0; j < 3; j++) {
        columns.push(this.renderSquare(counter++));
      }
      allSquares.push(<div key={counter}>{columns}</div>);
    }
    return <div>{allSquares}</div>;
  }
}

export default Board;

// <div>
//   <div className="board-row">
//     {this.renderSquare(0)}
//     {this.renderSquare(1)}
//     {this.renderSquare(2)}
//   </div>
//   <div className="board-row">
//     {this.renderSquare(3)}
//     {this.renderSquare(4)}
//     {this.renderSquare(5)}
//   </div>
//   <div className="board-row">
//     {this.renderSquare(6)}
//     {this.renderSquare(7)}
//     {this.renderSquare(8)}
//   </div>
// </div>
