import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledBannerSection = styled.section`
    margin-bottom: 48px;
    position: relative;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 72px;
    }
`;

export const StyledSwiper = styled(Swiper)`
    position: relative;
    background-color: ${(props) => props.theme.colors.grey};
`;

export const Controls = styled.div`
    display: none;

    @media ${(props) => props.theme.media.tablet} {
        display: flex;
        position: relative;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        left: 39px;
        bottom: 48px;
        width: 88px;
        height: 44px;
        background-color: ${(props) => props.theme.colors.white};
        border-radius: 8px;
        z-index: 10;

        &::before {
            content: "";
            position: absolute;
            top: 8px;
            left: 44px;
            width: 1px;
            height: 28px;
            background-color: ${(props) => props.theme.colors.grey};
        }
    }

    @media ${(props) => props.theme.media.desktop} {
        left: 165px;
    }
`;
