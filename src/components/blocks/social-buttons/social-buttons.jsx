import React from "react";
import {ReactComponent as LogoFacebook} from "../../../assets/fb.svg";
import {ReactComponent as LogoVk} from "../../../assets/vk.svg";
import {SocialBlock, SocialText, SocialList, SocialItem, SocialLink} from "./styles";

function SocialButtons() {
  return (
    <SocialBlock>
      <SocialText>поделиться</SocialText>
      <SocialList>
        <SocialItem>
          <SocialLink href="/">
            <LogoFacebook></LogoFacebook>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href="/">
            <LogoVk></LogoVk>
          </SocialLink>
        </SocialItem>
      </SocialList>
    </SocialBlock>
  );
}

export default SocialButtons;