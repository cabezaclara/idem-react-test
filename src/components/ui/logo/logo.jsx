import React from "react";
import { StyledLogo, Text, StyledLogoImage } from "./styles";

function Logo({className}) {
  return (
    <StyledLogo href="/" className={className}>
      <StyledLogoImage />
      <Text>Гросс маркет</Text>
    </StyledLogo>
  );
}

export default Logo;