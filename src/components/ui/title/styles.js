import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: ${(props) => {
    let fontSize = "24px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "48px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "18px";
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let lineHeight = "31px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "23px";
    }
    return lineHeight;
  }};

  @media ${(props) => props.theme.media.tablet} { 
    font-size: ${(props) => {
      let fontSize = "32px";
      if (props.$size === TitleSize.BIG) {
        fontSize = "72px";
      }
      if (props.$size === TitleSize.SMALL) {
        fontSize = "24px";
      }
      return fontSize;
    }};
    line-height: ${(props) => {
      let lineHeight = "41px";
      if (props.$size === TitleSize.BIG) {
        lineHeight = "66px";
      }
      if (props.$size === TitleSize.SMALL) {
        lineHeight = "31px";
      }
      return lineHeight;
    }};
  }
`;

