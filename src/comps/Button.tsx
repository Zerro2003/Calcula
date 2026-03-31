import React from "react";

type ButtonProps = {
  label: string;
  onClick: (label: string) => void;
  variant?: "default" | "operator";
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "default",
}) => {
  return (
    <button className={`btn ${variant}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
