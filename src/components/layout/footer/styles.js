import styled from "styled-components";
import Logo from "../../ui/logo/logo";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    padding-top: 48px;
    padding-bottom: 32px;

    @media ${(props) => props.theme.media.tablet} {
        padding-left: 39px;
        padding-right: 39px;
    };

    @media ${(props) => props.theme.media.desktop} {
        padding-left: 165px;
        padding-right: 165px;
    }
`;

export const FooterMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: #ffffff;
    min-height: 126px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 24px;
    padding-bottom: 24px;
    margin-bottom: 24px;

    @media ${(props) => props.theme.media.tablet} {
        padding-left: 24px;
        padding-right: 24px;
    };
`;

export const StyledLogo = styled(Logo)`
    min-width: 100%;
    margin-bottom: 24px;

    @media ${(props) => props.theme.media.tablet} {
        min-width: 245px;
        margin-bottom: 0;
    }
`;

export const FooterSecondary = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${(props) => props.theme.media.tablet} {
        padding-left: 0;
        padding-right: 0;
    };
`;

export const PopupLink = styled.a`
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 24px;
    cursor: pointer;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 0;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const Copyright = styled.p`
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 18px;

    @media ${(props) => props.theme.media.tablet} {
        order: -1;
    }
`;
