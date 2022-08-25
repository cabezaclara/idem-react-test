import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  box-sizing: border-box;
  min-height: 47px;
  font-size: 18px;
  min-width: ${(props) => props.$minWidth ?`${props.$minWidth}px` : '100%'};
  padding: 12px 16px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => (props.$isColor ? props.theme.colors.yellow : props.theme.colors.grey)};
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  text-transform: lowercase;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.grey};
  }
`;