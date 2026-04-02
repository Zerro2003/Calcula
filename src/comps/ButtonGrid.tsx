import Button from "./Button";
type Ope = "+" | "-" | "*" | "/" | "%";
export default function ButtonGrid({
  handleDig,
  handleOpe,
  handleAc,
  handleEqual,
}: {
  handleDig: (digit: string) => void;
  handleOpe: (oper: string) => void;
  handleAc: () => void;
  handleEqual: () => void;
}) {
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
          } else if (button === "AC") {
            return <Button key={button} value={button} onClick={handleAc} />;
          } else if (button === "=") {
            return <Button key={button} value={button} onClick={handleEqual} />;
          }
          return null;
        })}
      </div>
    </>
  );
}
