import styled  from "styled-components";
import GreenCheck from "../../../assets/green-check.svg";
import { Label } from "../../styled";
import Recaptcha from "../../../assets/captcha.svg";

export const Field = styled.p`
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`;

export const RadioButtonLabel = styled.span`
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;

    &::before {
      content: "";
      left: 0;
      background-color: ${(props) => props.theme.colors.grey};
      display: block;
      position: relative;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-right: 12px;
    }
    ${(props) =>
      props.$isChecked &&
      `
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 7px;
        top: 7px;
        height: 10px;
        width: 10px;
        background-color: ${props.theme.colors.black};
        border-radius: 50%;
      }
  `}
`;

export const Select = styled.select`
    display: block;
    margin: 0;
    margin-top: 12px;
    padding: 12px 16px;
    width: 100%;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 8px;
    font-size: 18px;
    line-height: 23px;
    cursor: pointer;
    border: none;
    appearance: none;
    background-repeat: no-repeat;
    background-position: 95%;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.9 9.5a1 1 0 0 1-1.8 0L.8 2A1 1 0 0 1 1.7.5h8.6c.8 0 1.3.8.9 1.5L6.9 9.5Z' fill='%23000'/%3E%3C/svg%3E%0A");

    &::placeholder {
        opacity: 0.3;
    }

    &:focus {
        outline: 2px solid ${(props) => props.theme.colors.darkgrey};
    }
    &:disabled {
        pointer-events: auto;
    }
`;

export const Text = styled(Label)`
    margin-bottom: 12px;
`;

export const SmallText = styled(Label)`
    opacity: 0.3;
    margin-bottom: 24px;

    @media ${(props) => props.theme.media.tablet} {
        align-self: center;
        margin-bottom: 0;
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    column-gap: 90px;
    margin-top: 24px;

    @media ${(props) => props.theme.media.desktop} {
        justify-content: space-between;
        column-gap: 0;
    }
`;

export const FieldGroup = styled.div`
    @media ${(props) => props.theme.media.tablet} {
        display: grid;
        column-gap: 30px;
        grid-template-columns: 330px 330px;
    }

    @media ${(props) => props.theme.media.desktop} {
        grid-template-columns: 255px 255px;
    }
`;

export const Radio = styled.input`
    display: none;
`;

export const Textarea = styled.textarea`
    margin-top: 12px;
    padding: 12px 15px;
    box-sizing: border-box;
    width: 100%;
    background-color: ${(props) => props.theme.colors.grey};
    border: none;
    border-radius: 8px;
    min-height: 94px;
    margin-bottom: 10px;
`;

export const StyledForm = styled.form`
    margin-bottom: 48px;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 72px;
    }

    @media ${(props) => props.theme.media.desktop} {
        margin-bottom: 0;
    }
`;

export const Error = styled.p`
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.red};
    font-size: 14px;
    line-height: 18px;
`;

export const CorrectField = styled.span`
    display: block;
    width: 18px;
    height: 18px;
    background-image: url(${GreenCheck});
    background-repeat: no-repeat;
    background-position: center center;
`;

export const LabelTitle = styled.span`
    display: flex;
    gap: 15px;
    align-items: center;
`;

export const TitleCapcha = styled(Label)`
    margin-bottom: 12px;

    @media ${(props) => props.theme.media.tablet} {
        grid-column: 1/-1;
        justify-self: flex-start;
    }
`;

export const StyledCaptcha = styled.div`
    position: relative;
    display: block;
    background-color: ${(props) => props.theme.colors.grey};
    min-width: 100%;
    height: 47px;
    border-radius: 8px;
    padding: 12px 15px;
    box-sizing: border-box;

    @media ${(props) => props.theme.media.tablet} {
        min-width: 330px;
    }

    @media ${(props) => props.theme.media.desktop} {
        min-width: 255px;
    }

    &::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        right: 16px;
        top: 12px;
        background-image: url(${Recaptcha});
    }
`;
