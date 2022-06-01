import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fonts.family};
    font-size: ${(props) => props.theme.sizes.defaultFontSize};
    line-height: ${(props) => props.theme.sizes.defaultLineHeight};
    font-weight: ${(props) => props.theme.fonts.mediumWeight};
    color: ${(props) => props.theme.colors.black};
  }
`;