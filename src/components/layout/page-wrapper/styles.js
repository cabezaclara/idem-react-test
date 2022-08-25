import styled from "styled-components";

export const StyledPageWrapper = styled.main`
    min-width: 375px;
    margin: 0 auto;

    @media ${(props) => props.theme.media.tablet} {
        min-width: 768px;
    };

    @media ${(props) => props.theme.media.desktop} {
        min-width: 1440px;
    }
`;