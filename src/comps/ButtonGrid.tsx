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
    <>
      <div className="grid grid-cols-4 bg-gray-400 h-full mx-[31.5rem]">
        {buttons.map((button) => {
          if ("0123456789.".includes(button)) {
            return (
              <Button
                className={
                  button === "0"
                    ? "col-span-2 bg-gray-200 h-26 w-52  border-2 text-2xl"
                    : "bg-gray-200 h-26 w-26  border-2 text-2xl"
                }
                key={button}
                value={button}
                onClick={() => handleDig(button)}
              />
            );
          } else if ("+-*/%".includes(button)) {
            return (
              <Button
                className={
                  button === "%"
                    ? "bg-gray-200 h-26 w-26  border-2 text-2xl"
                    : "bg-orange-400 h-26 w-26  border-2 text-2xl"
                }
                key={button}
                value={button}
                onClick={() => handleOpe(button as Ope)}
              />
            );
          } else if (button === "AC") {
            return (
              <Button
                className="bg-gray-200 h-26 w-26  border-2 text-2xl"
                key={button}
                value={button}
                onClick={handleAc}
              />
            );
          } else if (button === "=") {
            return (
              <Button
                className="bg-orange-400 h-26 w-26  border-2 text-2xl"
                key={button}
                value={button}
                onClick={handleEqual}
              />
            );
          } else if (button === ".") {
            return (
              <Button
                key={button}
                value={button}
                onClick={() => handleDig(button)}
              />
            );
          } else if (button === "+/-") {
            return (
              <Button
                className="bg-gray-200 h-26 w-26  border-2 text-2xl"
                key={button}
                value={button}
                onClick={() => handleSign()}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
