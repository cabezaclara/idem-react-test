import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import bannersList from "../../mocks/bannersList";
import cardsList from "../../mocks/cardsList";
import mapData from "../../mocks/mapData";
import MainPage from '../pages/main-page/main-page';
import ThanksPage from "../pages/thanks-page/thanks-page";
import FormPage from "../pages/form-page/form-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";

export default function App() {
  return (
    <>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path={AppRoute.MAIN} element={<PageWrapper />}>
              <Route index element={<MainPage banners={bannersList} cards={cardsList} mapData={mapData} />} />
              <Route
                path={AppRoute.FORM.replace(AppRoute.MAIN, "")}
                element={<FormPage />}
              />
              <Route
                path={AppRoute.THANKS.replace(AppRoute.MAIN, "")}
                element={<ThanksPage />}
              />
            </Route>
          </Routes>
      </Router>
    </>
  );
}
