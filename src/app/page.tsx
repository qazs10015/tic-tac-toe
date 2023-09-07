'use client';

import React, { useState } from 'react';
import Square from './components/Square/square';

// winner condition
const calculateWinner = (squares: string[]) => {
  const lines = [
    // 橫
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // 直
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // 斜
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }

  return null;
};

export default function Home() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // get next move (X or O)
  const nextMove = squares.filter((item) => item !== null).length % 2 === 0 ? 'X' : 'O';

  // click event
  const handleClick = (i: number) => {
    // 如果有值，就不要再改了
    if (squares[i] || calculateWinner(squares)) return;

    // save next move
    squares[i] = nextMove;

    // update squares
    setSquares([...squares]);
  };

  const winner = calculateWinner(squares);

  // show current status
  const status = winner ? `Winner: ${winner}` : `Next player: ${nextMove ? 'X' : 'O'}`;

  // start game
  const startGame = () => setSquares(Array(9).fill(null));

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
      <button className="startGame" onClick={startGame}>
        start
      </button>
    </>
  );
}
