import React from "react";
import {TitleLevel, TitleSize} from "../../ui/title/title";
import {StyledHeader, StyledTitle, StyledItemTitle, P, ImportantText, Close} from "./styles";

function DataProcessing({onClose}) {
  return (
    <>
      <StyledHeader>
        <StyledTitle level={TitleLevel.H1} size={TitleSize.BIG}>
        Обработка данных
        </StyledTitle>
        <Close onClick={onClose} />
      </StyledHeader>
      <StyledItemTitle level={TitleLevel.H2} size={TitleSize.SMALL}>
      1. Что регулирует настоящая политика конфиденциальности
      </StyledItemTitle>
      <P>
      Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, 
      включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), 
      которую ООО «Гросс маркет» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «Гросс маркет» 
      (далее — «Гросс маркет»), могут получитьо Вас в процессе использования Вами любых сайтов, программ, продуктов 
      и/или сервисов Гросс маркет (далее вместе  «Сервисы»), информацию о которых Гросс маркет может также получать 
      Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете 
      (например, от рекламодателей Гросс маркет или службами такси). В таких случаях передача Персональной информации 
      возможна только в случаях, установленных применимым законодательством, и осуществляется на основании специальных договоров 
      между Гросс маркет и каждым из Партнеров.
      <ImportantText>Пожалуйста, обратите внимание, что использование любого из Сайтов и/или Сервисов может регулироваться дополнительными условиями, 
      которые могут вносить в настоящую Политику изменения и/или дополнения, и/или иметь специальные условия в отношении 
      персональной информации, размещенные в соответствующих разделах документов для таких Сайтов /или Сервисов.</ImportantText>
      </P>
      <StyledItemTitle level={TitleLevel.H2} size={TitleSize.SMALL}>
      2. Кто обрабатывает информацию
      </StyledItemTitle>
      <P>
      Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, 
      в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству 
      Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), 
      или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо 
      предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.
      </P>
      <StyledItemTitle level={TitleLevel.H2} size={TitleSize.SMALL}>
      3. Какова цель данной Политики
      </StyledItemTitle>
      <P>
      Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании 
      Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым 
      законодательством.
      </P>
      <StyledItemTitle level={TitleLevel.H2} size={TitleSize.SMALL}>
      4. Какую Персональную информацию о Вас собирает Гросс маркет
      </StyledItemTitle>
      <P>
      Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, 
      в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству 
      Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его 
      аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет 
      тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.
      </P>
    </>
  )
};

export default DataProcessing;