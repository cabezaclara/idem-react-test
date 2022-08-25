import React from "react";
import {TitleSize, TitleLevel} from "../../ui/title/title";
import {StyledThanksPage, H1, H2, P, B} from "./styles";
import PhoneNumber from "../../ui/phone-number/phone-number";

function ThanksPage() {
  return (
    <StyledThanksPage>
      <H1 level={TitleLevel.H1} size={TitleSize.BIG}>Ждем тебя!</H1>
      <P>
        В 2020 году самыми востребованными умениями и качествами на рынке труда станут: 
        <B>Умение ставить цели, планировать свое время, инициативность, настойчивость, 
        высокая мотивация, умение эффективно общаться, любознательность.</B>
        А профессиональным навыкам можно научить любого человека.
      </P>
      <div>
        <H2>Остались вопросы?</H2>
        <PhoneNumber />
      </div>
    </StyledThanksPage>
  );
}

export default ThanksPage;