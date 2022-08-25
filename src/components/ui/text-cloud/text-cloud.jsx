import React from "react";
import { StyledTextCloud } from "./styles";

function TextCloud({className, children}) {
    return (
        <StyledTextCloud className={className}>
            {children}
        </StyledTextCloud>
    )
}

export default TextCloud;