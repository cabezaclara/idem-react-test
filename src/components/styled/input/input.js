import styled from "styled-components";

const Input = styled.input`
    margin: 0;
    margin-top: 12px;
    padding: 12px 16px;
    width: 100%;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 8px;
    font-size: 18px;
    line-height: 23px;
    border: none;

    &::placeholder {
        opacity: 0.3;
    }

    &:focus {
        outline: 2px solid ${(props) => props.theme.colors.darkgrey};
    }
`;
export default Input;