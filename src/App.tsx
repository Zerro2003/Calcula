import { useState } from "react";
import ButtonGrid from "./comps/ButtonGrid";
import Display from "./comps/Display";
type Ope = "+" | "-" | "*" | "/" | "%";
export default function App() {
  const [num, setNumber] = useState<string>("0");
  const [prevNumber, setPrev] = useState<string>("");
  const [operator, setOpe] = useState<Ope | null>(null);

  function performCalculation(a: string, b: string, op: Ope): string {
    const n1 = Number(a);
    const n2 = Number(b);
    let res = 0;
    switch (op) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": res = n1 / n2; break;
      case "%": res = n1 % n2; break;
    }
    return res.toString();
  }

  function handleDig(digit: string) {
    if (num === "0" && digit !== ".") {
      setNumber(digit);
    } else {
      setNumber(num + digit);
    }
  }
  function handleSign() {
    setNumber((Number(num) * -1).toString());
  }
  function handleOpe(oper: Ope) {
    if (prevNumber !== "" && operator !== null && num !== "") {
      const result = performCalculation(prevNumber, num, operator);
      setPrev(result);
      setNumber("");
    } else if (num !== "") {
      setPrev(num);
      setNumber("");
    }
    setOpe(oper);
  }
  function handleEqual() {
    if (prevNumber !== "" && operator !== null && num !== "") {
      const result = performCalculation(prevNumber, num, operator);
      setNumber(result);
      setPrev("");
      setOpe(null);
    }
  }
  function handleAc() {
    setNumber("0");
    setPrev("");
    setOpe(null);
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col">
        <Display num={num || prevNumber} />

        <ButtonGrid
          handleDig={handleDig}
          handleOpe={handleOpe}
          handleAc={handleAc}
          handleEqual={handleEqual}
          handleSign={handleSign}
        />
      </div>
    </div>
  );
}
