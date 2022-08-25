import styled from "styled-components";
import Title from "../../ui/title/title";
import { ReactComponent as CloseImage } from "../../../assets/close.svg";

export const StyledHeader = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.white};
    position: sticky;
    top: 0;
`;

export const StyledTitle = styled(Title)`
    padding-bottom: 32px;

    @media ${(props) => props.theme.media.tablet} {
        padding-bottom: 48px;
    }
`;

export const StyledItemTitle = styled(Title)`
    margin-bottom: 24px;
`;

export const P = styled.p`
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 32px;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 48px;
    }
`;

export const ImportantText = styled.strong`
    display: block;
    margin-top: 24px;
    color: ${(props) => props.theme.colors.darkgrey};
    font-weight: 400;
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
