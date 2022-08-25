import React from "react";
import { TitleLevel, TitleSize } from "../../ui/title/title";
import {StyledBanner, StyledTitle, Figure, NameTextCloud, ProfessionTextCloud} from "./styles";

function Banner({title, name, profession, image, directOrder}) {
  return (
    <StyledBanner>
      <StyledTitle level={TitleLevel.H1} size={TitleSize.BIG}>
        {title}
      </StyledTitle>
      <Figure>
      <img
        src={image}
        className="banner__image"
        alt="изображение професии"
      />
      <NameTextCloud $directOrder={directOrder}> {name} </NameTextCloud>
      <ProfessionTextCloud $directOrder={directOrder}> {profession} </ProfessionTextCloud>
      </Figure>
    </StyledBanner>
  );
};

export default Banner;