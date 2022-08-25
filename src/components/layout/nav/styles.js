import styled from "styled-components";
import CloseImage from "../../../assets/close-page.svg";
import Button from "../../ui/button/button";
import {Li} from "../../styled";
import { Link } from "react-router-dom";

export const StyledButton = styled(Button)`
    @media ${(props) => props.theme.media.maxtablet} {
      display: block;
      position: fixed;
      top: 18px;
      left: 15px;
      right: 15px;
      z-index: 50;

      &.hidden {
        display: none;
      }
    }

    @media ${(props) => props.theme.media.tablet} {
      display: block;

      &.hidden {
        display: block;
      }
  }
`;

export const CloseButton = styled(Link)`
    width: 24px;
    height: 24px;
    padding: 0;
    cursor: pointer;
    background-image: url(${CloseImage});
    background-position: 0 0;
    background-repeat: no-repeat;

    @media ${(props) => props.theme.media.tablet} {
        top: 32px;
    }
`;

export const StyledLi = styled(Li)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;