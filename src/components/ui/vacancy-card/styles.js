import styled from "styled-components";

export const StyledCard = styled.article`
    display: flex;
    position: relative;
    width: 252px;
    height: 344px;
    box-sizing: border-box;
    padding: 24px;
    border-radius: 8px;
    margin-right: 30px;
    background-color: ${(props) => props.theme.colors.grey};
    background-image: ${(props) => props.image};
    background-repeat: no-repeat;
    background-position: center 84px;
    background-size: contain;

    &:hover {
        background-image: none;
        background-color: ${(props) => props.theme.colors.yellow};

     & p {
         display: block;
        }
    }

    @media ${(props) => props.theme.media.tablet} {
         width: 300px;
         height: 410px;
     }

     @media ${(props) => props.theme.media.desktop} {
         width: 350px;
         height: 480px;
     }
`;

export const Description = styled.p`
    margin: 0;
    padding: 0;
    display: none;
    font-size: 18px;
    line-height: 23px;
    align-self: flex-end;
`;
