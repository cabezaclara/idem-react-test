import React from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../pages/main-page/main-page';
import './style.css';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;