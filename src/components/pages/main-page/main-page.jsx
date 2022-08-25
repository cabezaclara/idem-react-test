import React from "react";
import BannersSlider from "../../blocks/banners-slider/banners-slider";
import Instagram from "../../blocks/instagram/instagram";
import VacansiesSlider from "../../blocks/vacancies-slider/vacancies-slider";
import Map from "../../blocks/map/map";

function MainPage({ banners, cards, mapData }) {
  return (
    <>
      <BannersSlider banners={banners}></BannersSlider>
      <VacansiesSlider cards={cards}></VacansiesSlider>
      <Instagram></Instagram>
      <Map mapData={mapData}></Map>
    </>
  );
};

export default MainPage;