import styled from "styled-components";
import Clip from "../../../assets/clip.svg";
import CloseImage from "../../../assets/close.svg";

export const Label = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    min-height: 47px;
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    padding: 15px 21px;
`;

export const Span = styled.span`
    opacity: 0.3;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        display: inline-block;
        left: 0;
        position: relative;
        width: 14px;
        height: 24px;
        background-image: url(${Clip});
        margin-right: 17px;
    }
`;

export const P = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 5px;
    padding-left: 30px;
    color: ${(props) => props.theme.colors.darkgrey};
    display: flex;
    align-items: center;
`;

export const Close = styled.span`
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-left: 18px;
    background-image: url(${CloseImage});
    background-size: cover;
    opacity: 0.3;
`;