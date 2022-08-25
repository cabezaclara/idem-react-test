import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { AppRoute } from "../../../const";
import { StyledHeader } from "./styles";

function Header() {
  const pageUrl = useLocation().pathname;
  return (
    <StyledHeader isGrey={pageUrl===AppRoute.MAIN ? false : true} >
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;