import React from "react";
import PhoneNumber from "../../ui/phone-number/phone-number";
import Title, {TitleSize, TitleLevel} from "../../ui/title/title";
import Form from "../../blocks/form/form";
import {StyledFormPage, StyledTitle, Description} from "./styles";

function FormPage() {
  return (
    <StyledFormPage>
      <StyledTitle level={TitleLevel.H1} size={TitleSize.BIG}>Работа твоей мечты</StyledTitle>
      <Form />
      <section>
        <Title level={TitleLevel.H2}>Наша суперцель</Title>
        <Description>— стать любимым магазином для каждой российской семьи.</Description>
        <Description>Сотни тысяч наших сотрудников ежедневно работают над её достижением.</Description>
        <Description>Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если вместе с тобой.</Description>
        <PhoneNumber /> 
      </section>
    </StyledFormPage>
  );
}

export default FormPage;