import React from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import { StyledPageWrapper } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper() {
  return (
    <>
      <Header />
      <StyledPageWrapper>
        <Outlet />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;