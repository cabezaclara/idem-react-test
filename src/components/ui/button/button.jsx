import React, {forwardRef} from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
  ({ children, minWidth, link, className, isColor, onClick, type, disabled, ...props}, ref) => {
  return (
    <StyledButton 
      {...props}
      $minWidth={minWidth}
      ref={ref}
      {...(link ? { to: link } : { as: "button", onClick, type: type ? type : "button" })}
      className={className}
      $isColor={isColor}
      disabled={disabled ? disabled : false}
    >
      {children}
    </StyledButton>
  );
  }
);


export default Button;