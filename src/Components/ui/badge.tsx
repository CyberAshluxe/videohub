import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & { variant?: string };

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <span className={className} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
