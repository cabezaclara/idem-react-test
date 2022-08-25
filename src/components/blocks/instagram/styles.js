import styled from "styled-components";
import {Ul, Li} from "../../styled";

export const StyledInstagramList = styled(Ul)`
    margin-top: 32px;
    margin-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    @media ${(props) => props.theme.media.tablet} {
        gap: 30px;
        margin-bottom: 30px;
    }

    @media ${(props) => props.theme.media.desktop} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    `;

export const StyledInstagramElement = styled(Li)`
    width: 100%;
    min-height: 346px;
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 8px;

    @media ${(props) => props.theme.media.tablet} {
        width: 210px;
        min-height: 210px;

        &:first-child,
        &:nth-child(2) {
            width: 330px;
            min-height: 330px;
        }
    };

    @media ${(props) => props.theme.media.desktop} {
        width: 100%;
        min-height: 255px;

        &:first-child {
            width: 100%;
            grid-column: 1 / 3;
            grid-row: 1 / 3;
        };

        &:nth-child(2) {
            width: 100%;
            min-height: 255px;
        }
    }

`;