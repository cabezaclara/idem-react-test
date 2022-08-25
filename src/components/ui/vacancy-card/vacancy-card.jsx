import React from "react";
import TextCloud from "../text-cloud/text-cloud";
import {StyledCard, Description} from "./styles";

function VacancyCard({title, image, description}) {
  return (
    <StyledCard image={image}>
      <TextCloud>{title}</TextCloud>
      <Description>{description}</Description>
    </StyledCard>
  );
}

export default VacancyCard;