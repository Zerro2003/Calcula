import { useState } from "react";
import ButtonGrid from "./comps/ButtonGrid";
import Display from "./comps/Display";
type Ope = "+" | "-" | "*" | "/" | "%";
export default function App() {
  const [num, setNumber] = useState<string>("");
  const [prevNumber, setPrev] = useState<string>("");
  const [operator, setOpe] = useState<Ope | null>(null);

  function handleDig(digit: string) {
    setNumber(num + digit);
  }
  function handleOpe(oper: Ope) {
    if (prevNumber !== "" && operator !== null) {
      handleEqual();
    }
    setPrev(num);
    setOpe(oper);
    setNumber("");
  }
  function handleEqual() {
    let result = 0;
    switch (operator) {
      case "+":
        result = Number(num) + Number(prevNumber);
        break;
      case "-":
        result = Number(num) - Number(prevNumber);
        break;
      case "*":
        result = Number(num) * Number(prevNumber);
        break;
      case "/":
        result = Number(num) / Number(prevNumber);
        break;
      case "%":
        result = Number(num) % Number(prevNumber);
        break;
    }
    setNumber(result.toString());
    setPrev("");
    setOpe(null);
  }
  function handleAc() {
    setNumber("0");
    setPrev("");
    setOpe(null);
  }
  return (
    <>
      <Display num={num} />

      <ButtonGrid
        handleDig={handleDig}
        handleOpe={handleOpe}
        handleAc={handleAc}
        handleEqual={handleEqual}
      />
    </>
  );
}
