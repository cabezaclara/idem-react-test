import styled from "styled-components";
import { ReactComponent as CloseImage } from "../../../assets/close.svg";

export const StyledPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    overflow-y: scroll;
    z-index: 60;
`;

export const PopupContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 72px 14px 14px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    box-sizing: border-box;

    @media ${(props) => props.theme.media.tablet} {
        top: 72px;
        left: 50%;
        transform: translateX(-50%);
        width: 684px;
        padding: 32px 24px;
        border-radius: 8px;
    }

    @media ${(props) => props.theme.media.desktop} {
        padding: 72px 95px;
        width: 1110px;
    }
`;

export const Close = styled(CloseImage)`
    position: absolute;
    top: 24px;
    right: 32px;
    width: 24px;
    height: 24px;
    padding: 0;
    cursor: pointer;

    @media ${(props) => props.theme.media.tablet} {
        top: 32px;
    }
`;