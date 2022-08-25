import React from "react";
import { forwardRef } from "react";
import { useState } from "react";
import {VisuallyHiddenInput, Label} from "../../styled";
import { StyledCheckbox } from "./styles";

const Checkbox = forwardRef(({
    text,
    defaultChecked,
    value,
    isFilling, 
    ...props
  }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const handleCheckboxChange = () => setIsChecked(!isChecked);
    
    return (
        <Label>
        <VisuallyHiddenInput
            type="checkbox"
            checked={isChecked}
            value={isChecked}
            onChange={handleCheckboxChange}
            {...props}
            ref={ref}
        />
        <StyledCheckbox onClick={handleCheckboxChange} $isChecked={isChecked} isFilling={isFilling}>
            {text}
        </StyledCheckbox>
        </Label>
    )
});

export default Checkbox;