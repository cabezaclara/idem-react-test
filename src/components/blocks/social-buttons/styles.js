import styled from "styled-components";
import {Ul, Li} from "../../styled";

export const SocialBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SocialText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 32px;
    line-height: 41px;
    display: none;

    @media ${(props) => props.theme.media.tablet} {
        display: block;
        margin-right: 69px;
    };

    @media ${(props) => props.theme.media.desktop} {
        margin-right: 279px;
    };
`;

export const SocialList = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    align-content: end;
`;

export const SocialItem = styled(Li)`
    margin-right: 8px;
    min-height: 24px;
    min-width: 24px;
`;

export const SocialLink = styled.a`
    text-decoration: none;
`;