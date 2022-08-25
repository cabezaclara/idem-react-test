import styled from "styled-components";
import Title from "../../ui/title/title";

export const StyledThanksPage = styled.div`
    padding: 48px 15px;
    box-sizing: border-box;

    @media ${(props) => props.theme.media.tablet} {
        padding: 72px 39px;
    }

    @media ${(props) => props.theme.media.desktop} {
        display: grid;
        grid-template-columns: 1fr 445px;
        column-gap: 125px;
        padding: 72px 165px;
    }
`;

export const H1 = styled(Title)`
    margin-bottom: 32px;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 48px;
    }

    @media ${(props) => props.theme.media.tablet} {
        grid-column: 1/-1;
    }
`;

export const H2 = styled(Title)`
    margin-bottom: 32px;
`;

export const P = styled.p`
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 48px;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 72px;
    }

    @media ${(props) => props.theme.media.desktop} {
        margin-bottom: 108px;
    }
`;

export const B = styled.b`
    display: block;
    position: relative;
    margin-top: 24px;
    margin-bottom: 24px;
    padding-left: 15px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: ${(props) => props.theme.colors.yellow};
    }
`;
