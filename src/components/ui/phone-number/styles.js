import styled from "styled-components";
import { ReactComponent as Image } from "../../../assets/phone.svg";

export const StyledLink = styled.a`
    display: flex;
    align-content: center;
    margin-left: ${(props) => props.$inHeader ? 'auto' : 0};
    min-height: ${(props) => props.$inHeader ? '31px' : 'none'};
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.$inHeader ? 'none' : props.theme.colors.grey};
    box-sizing: border-box;
    padding: ${(props) => props.$inHeader ? '0' : "22px 75px"};

    &:hover {
    text-decoration: none;
    }
`;

export const PhoneText = styled.span`
    display: ${(props) => props.$inHeader ? 'none' : "block"};
    margin: 0 auto;

    @media ${(props) => props.theme.media.tablet} { 
        display: inline-block;
        font-size: ${(props) => props.$inHeader ? '18px' : "inherit"};
        line-height: ${(props) => props.$inHeader ? '23px' : "inherit"};
        margin-right: ${(props) => props.$inHeader ? '32px' : "auto"};;
    }
`;

export const PhoneImage = styled(Image)`
    display: ${(props) => props.$inHeader ? 'block' : "none"};;
    width: 16px;
    height: 24px;

    @media ${(props) => props.theme.media.tablet} {
        display: none;
    }
`;