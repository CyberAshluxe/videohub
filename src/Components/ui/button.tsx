import React from "react";

type Variant = "default" | "outline" | "ghost" | "link" | "icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  size?: "sm" | "md" | "lg" | "icon";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors transition-transform transform-gpu focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  default:
    "bg-primary text-primary-foreground border border-transparent hover:bg-primary/90 hover:scale-105 hover:shadow-md active:scale-95",
  outline:
    "bg-transparent border border-border hover:bg-muted/5 hover:shadow-sm active:scale-95",
  ghost: "bg-transparent hover:bg-muted/5 hover:shadow-sm active:scale-95",
  link: "bg-transparent underline-offset-4 hover:underline text-primary",
  icon: "bg-transparent p-1 hover:bg-muted/5 active:scale-95",
};

const sizeClasses: Record<string, string> = {
  sm: "h-8 px-2 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base",
  icon: "h-10 w-10 p-2",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  asChild,
  className = "",
  variant = "default",
  size = "md",
  ...rest
}) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size] ?? ""
  } ${className}`.trim();

  if (asChild) {
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
