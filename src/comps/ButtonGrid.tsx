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
      {buttons.map((button) => (
        <Button key={button} value={button} />
      ))}
    </>
  );
}
