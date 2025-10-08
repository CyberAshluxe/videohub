import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const baseInput =
  "w-full rounded-md border border-border bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow transition-transform hover:shadow-sm focus:shadow-md";

export const Input: React.FC<InputProps> = ({ className = "", ...rest }) => {
  return <input className={`${baseInput} ${className}`.trim()} {...rest} />;
};

export default Input;
