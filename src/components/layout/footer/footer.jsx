import React, {useState} from "react";
import SocialButtons from "../../blocks/social-buttons/social-buttons";
import Popup from "../../blocks/popup/popup";
import {StyledFooter, StyledLogo, FooterMain, PopupLink, Copyright, FooterSecondary} from "./styles";

function Footer() {
  const [isShowPopup, setIsShowPopup] = useState(false);
  return (
    <StyledFooter>
      <FooterMain>
        <StyledLogo />
        <SocialButtons />
      </FooterMain>
      <FooterSecondary>
        <PopupLink onClick={() => setIsShowPopup(true)}>Политика обработки персональных данных</PopupLink>
        <Copyright>© Гросс маркет 2020</Copyright>
      </FooterSecondary>
      <Popup
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
      >
        
      </Popup>
    </StyledFooter>
  );
}

export default Footer;