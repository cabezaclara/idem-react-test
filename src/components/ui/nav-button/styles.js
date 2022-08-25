import styled from "styled-components";
import { ReactComponent as ArrowImage } from "../../../assets/arrow.svg";

export const StyledNavButton = styled(ArrowImage)`
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transform: ${(props) => (props.$left ? "rotate(180deg)" : "none")};

    &.disable {
        opacity: 0.2;
    }
`;