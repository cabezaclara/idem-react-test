import styled from "styled-components";
import Title from "../../ui/title/title";
import { Map } from "@pbe/react-yandex-maps";

export const StyledTitle = styled(Title)`
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 32px;

    @media ${(props) => props.theme.media.tablet} {
        padding-left: 39px;
        padding-right: 39px;
    }

    @media ${(props) => props.theme.media.desktop} {
        padding-left: 165px;
        padding-right: 165px;
    }
`;

export const StyledYandexMap = styled(Map)`
    width: 100%;
    height: 600px;

    @media ${(props) => props.theme.media.desktop} {
        margin-left: 165px;
        margin-right: 165px;
        margin-bottom: 72px;
        height: 540px;
        width: 1110px;
        border-radius: 8px;
        overflow: hidden;
    }

    & .ymaps-2-1-79-ground-pane {
        filter: grayscale(100%);
    }

    & .ymaps-2-1-79-float-button-text {
        font-family: "Euclid Circular B","Arial",sans-serif;
        font-size: 18px;
        line-height: 23px;
        padding: 10px 15px;
        font-weight: 500;
    }

    & .ymaps-2-1-79-float-button.ymaps-2-1-79-_hidden-icon {
        border-radius: 8px;
        height: 43px;
    }

    & .ymaps-2-1-79-float-button.ymaps-2-1-79-_checked {
        background-color: #FFDF31;
    }
`;