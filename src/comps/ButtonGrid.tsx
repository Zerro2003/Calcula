import Button from "./Button";
type Ope = "+" | "-" | "*" | "/" | "%";
export default function ButtonGrid({
  handleDig,
  handleOpe,
  handleAc,
  handleEqual,
  handleSign,
}: {
  handleDig: (digit: string) => void;
  handleOpe: (oper: string) => void;
  handleAc: () => void;
  handleEqual: () => void;
  handleSign: () => void;
}) {
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="grid grid-cols-4 bg-gray-400 h-full">
      {buttons.map((button) => {
        let className = "border-1 text-2xl h-26 w-26 ";
        
        if ("0123456789.".includes(button)) {
          className += "bg-gray-200 ";
          if (button === "0") className = "col-span-2 bg-gray-200 h-26 w-52 border-1 text-2xl ";
        } else if ("+-*/=".includes(button)) {
          className += "bg-orange-400 ";
        } else {
          className += "bg-gray-200 ";
        }

        return (
          <Button
            key={button}
            value={button}
            className={className}
            onClick={() => {
              if ("0123456789.".includes(button)) handleDig(button);
              else if ("+-*/%".includes(button)) handleOpe(button as Ope);
              else if (button === "AC") handleAc();
              else if (button === "=") handleEqual();
              else if (button === "+/-") handleSign();
            }}
          />
        );
      })}
    </div>
  );
}
