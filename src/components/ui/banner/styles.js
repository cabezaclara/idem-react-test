import styled from "styled-components";
import Title from "../../ui/title/title";
import TextCloud from "../../ui/text-cloud/text-cloud";

export const StyledBanner = styled.article`
    width: 100%;
    min-height: 590px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media ${(props) => props.theme.media.tablet} {
        min-height: 400px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const StyledTitle = styled(Title)`
    margin-top: 48px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 58px;

    @media ${(props) => props.theme.media.tablet} {
        width: 278px;
        margin-left: 39px;
        margin-bottom: 48px;
        flex-shrink: 0;
        z-index: 10;
    };

    @media ${(props) => props.theme.media.desktop} {
        margin-left: 165px;
    };
`;

export const Figure = styled.figure`
    position: relative;
    margin: 0;
    padding: 0;
    clip-path: circle(270px at 50% 68%);

    & img {
        transform: translateX(-133px);
    };

    @media ${(props) => props.theme.media.tablet} {
        clip-path: circle(329px at 65% 48%);

        & img {
            transform: translateX(-40px);
        };
    };

    @media ${(props) => props.theme.media.desktop} {
        margin-right: 165px;
        clip-path: circle(306px at 50% 50%);

        & img {
            transform: none;
        };
    };
`;

export const NameTextCloud = styled(TextCloud)`
    left: 15px;
    top: ${(props) => (props.$directOrder ? "250px" : "80px")};

    @media ${(props) => props.theme.media.tablet} {
        left: auto;
        right: 320px;
        top: ${(props) => (props.$directOrder ? "298px" : "48px")};
    }

    @media ${(props) => props.theme.media.desktop} {
        right: 348px;
    }
`;

export const ProfessionTextCloud = styled(TextCloud)`
    top: ${(props) => (props.$directOrder ? "80px" : "250px")};
    right: 14px;

    @media ${(props) => props.theme.media.tablet} {
        right: 215px;
        top: ${(props) => (props.$directOrder ? "48px" : "298px")};
    }

    @media ${(props) => props.theme.media.desktop} {
        right: 120px;
    }
`;