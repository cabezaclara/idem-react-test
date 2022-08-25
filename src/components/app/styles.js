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
    font-family: ${(props) => props.theme.fonts.EuclidCircularB};
    font-size: 24px;
    line-height: 31px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};
  }
`;