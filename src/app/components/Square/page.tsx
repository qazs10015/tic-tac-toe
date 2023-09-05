'use client';
import React, { useState } from 'react';

interface ISquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export const Square: React.FC<ISquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
