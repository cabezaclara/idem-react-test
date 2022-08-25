import styled from "styled-components";

export const StyledTextCloud = styled.p`
    position: absolute;
    display: block;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    text-transform: lowercase;
    border-radius: 1000px;
    padding: 12px 16px;
`;