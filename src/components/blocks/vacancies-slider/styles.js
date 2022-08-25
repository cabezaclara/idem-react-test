import styled from "styled-components";
import { Swiper } from "swiper/react";
import Title from "../../ui/title/title";

export const StyledSection = styled.section`
  margin-bottom: 48px;
  position: relative;

  @media ${(props) => props.theme.media.tablet} {
      margin-bottom: 72px;
      padding-left: 39px;
  }

  @media ${(props) => props.theme.media.desktop} {
      padding-left: 165px;
  }
`;

export const StyledSwiper = styled(Swiper)`
    position: relative;
    display: flex;
`;

export const StyledTitle = styled(Title)`
    margin-bottom: 32px;
    margin-left: 15px;
`;

export const StyledControls = styled.div`
    display: none;

    @media ${(props) => props.theme.media.desktop} {
        display: flex;
        top: 0;
        right: 165px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        width: 88px;
        height: 44px;
        z-index: 10;
    }
`;