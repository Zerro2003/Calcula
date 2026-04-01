import React from "react";
import Button from "./Button";

export default function ButtonGrid() {
  const buttons = [
    "AC",
    "+/-",
    "+",
    "-",
    "*",
    "/",
    "%",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      <div className="bg-amber-400 h-full mx-7">
        {buttons.map((button) => {
          if ("0123456789".includes(button)) {
            return (
              <Button
                key={button}
                value={button}
                onClick={() => handleDig(button)}
              />
            );
          } else if ("+-*/%".includes(button)) {
            return (
              <Button
                key={button}
                value={button}
                onClick={() => handleOpe(button as Ope)}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
