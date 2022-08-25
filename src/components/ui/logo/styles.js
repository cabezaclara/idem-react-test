import styled from "styled-components";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";

export const StyledLogo = styled.a`
    display: flex;
    min-height: 31px;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};

    &:hover {
    text-decoration: none;
    }

    @media ${(props) => props.theme.media.tablet} {
        min-height: 41px;
    }
`;

export const Text = styled.span`
    display: flex;
    margin-left: 12px;
    text-transform: lowercase;

    @media ${(props) => props.theme.media.tablet} {
        font-size: 32px;
        line-height: 41px;
        margin-left: 16px;
    }
`;

export const StyledLogoImage = styled(LogoImage)`
    width: 17px;
    height: 24px;

    @media ${(props) => props.theme.media.tablet} {
        width: 21px;
        height: 30px;
    }
`;