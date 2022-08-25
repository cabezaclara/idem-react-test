import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    box-sizing: border-box;
    position: relative;
    min-width: 375px;
    min-height: 78px;
    margin: 0 auto;
    padding: 24px 32px 24px 15px ;
    background-color: ${(props) => props.isGrey ? props.theme.colors.grey : props.theme.colors.white};
    align-items: center;
    justify-content: space-between;

    @media ${(props) => props.theme.media.tablet} {
        min-width: 768px;
        min-height: 111px;
        padding: 32px 39px;
    };

    @media ${(props) => props.theme.media.desktop} {
        min-width: 1440px;
        padding-left: 165px;
        padding-right: 165px;
    }
`;