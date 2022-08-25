import styled, {css} from "styled-components";
import Check from "../../../assets/check.svg";

export const StyledCheckbox = styled.span`
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;

    &::before {
        content: "";
        left: 0;
        background-color: ${(props) => (props.isFilling ? props.theme.colors.grey : props.theme.colors.white)};
        display: block;
        position: relative;
        height: 24px;
        width: 24px;
        border-radius: 8px;
        flex-shrink: 0;
        margin-right: 12px;
        ${(props) =>
        props.$isChecked
            ? css`
                background-image: url(${Check});
                background-repeat: no-repeat;
                background-position: center center;
            `
            : ''};
    }
`;