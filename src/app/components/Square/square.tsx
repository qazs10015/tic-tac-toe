import React from 'react';

interface ISquareProps {
  value: string;
  onSquareClick: () => void;
}

const Square: React.FC<ISquareProps> = (props: ISquareProps) => {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
};

export default Square;
