import React from "react";
import Button from "./Button";

type ButtonGridProps = {
  onButtonClick: (label: string) => void;
};

const ButtonGrid: React.FC<ButtonGridProps> = ({ onButtonClick }) => {
  const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="button-grid">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((label) => (
            <Button
              key={label}
              label={label}
              onClick={onButtonClick}
              variant={
                ["÷", "x", "-", "+", "="].includes(label)
                  ? "operator"
                  : "default"
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonGrid;
