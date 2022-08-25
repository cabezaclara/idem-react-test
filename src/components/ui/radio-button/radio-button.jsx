import React, { forwardRef } from "react";
import {VisuallyHiddenInput, Label} from "../../styled";

const RadioButton = forwardRef(({
    labelComponent, // компонент для отображения label
    selectValue, // выбранное значение
    name, // имя
    value, // значение
    text, // текст элемента
    onChange, // событие при изменении
    ...props
  }, ref) => {
    const LabelComponent = labelComponent;
    const isChecked = value === selectValue;
    return (
        <Label>
        <VisuallyHiddenInput
            value={value}
            checked={isChecked}
            name={name}
            onChange={onChange}
            {...props}
            type="radio"
            ref={ref}
        />
        <LabelComponent $isChecked={isChecked}>
            {text}
        </LabelComponent>
        </Label>
    )
});

export default RadioButton;