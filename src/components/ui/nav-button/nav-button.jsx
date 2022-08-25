import React, {forwardRef} from "react";
import {StyledNavButton} from "./styles";

const NavButton = forwardRef(({ title, left }, ref) => {
    return (
        <StyledNavButton ref={ref} title={title} $left={left}></StyledNavButton>
    )
});

export default NavButton;