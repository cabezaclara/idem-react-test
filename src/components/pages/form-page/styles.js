import styled from "styled-components";
import Title from "../../ui/title/title";

export const StyledFormPage = styled.section`
    padding: 48px 14px 48px 15px;
    box-sizing: border-box;

    @media ${(props) => props.theme.media.tablet} {
        padding: 72px 39px;
    };

    @media ${(props) => props.theme.media.desktop} {
        padding: 72px 165px;
        display: grid;
        grid-template-columns: 540px 445px;
        column-gap: 125px;
    };
`;

export const StyledTitle = styled(Title)`
    margin-bottom: 48px;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 72px;
    };

    @media ${(props) => props.theme.media.desktop} {
        margin-bottom: 48px;
        grid-column: 1/-1;
    };
`;

export const Field = styled.p`
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`;

export const Label = styled.label`
    display: block;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: ${(props) => props.$forCheckbox ? `0` : '12px'};
    margin-left: ${(props) => props.$forCheckbox ? `12px` : '0'};
`;

export const Select = styled.select`
    display: block;
    margin: 0;
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
`;

export const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 18px;
    opacity: ${(props) => props.$small ? '0.3' : '1'};
    margin-bottom: ${(props) => props.$small ? '24px' : '12px'};
`;

export const CheckboxGroup = styled.div`
    display: flex;
    justify-content: space-between;
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
    width: 100%;
    background-color: ${(props) => props.theme.colors.grey};
    border: none;
    border-radius: 8px;
    min-height: 94px;
    margin-bottom: 10px;
`;

export const Form = styled.form`
    margin-bottom: 48px;

    @media ${(props) => props.theme.media.tablet} {
        margin-bottom: 72px;
    }

    @media ${(props) => props.theme.media.desktop} {
        margin-bottom: 0;
    }
`;

export const Description = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 24px;
    font-size: 18px;
    line-height: 23px;

    &:last-of-type {
        margin-bottom: 32px;
    }
`;