import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import { DatepickerProps } from './index';

export const DatePickerWrapper = styled.div`
    z-index: 2;
    width: 100%;
`;

export const DateTimepicker = styled(DatePicker)<DatepickerProps>`
    width: 100%;
    height: 45px;
    padding: 0 10px;
    text-align: center;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    position: relative;
    background-color: ${({ theme }) => theme.color.uiBase};
    color: ${({ theme }) => theme.color.text};
    border: 1px solid black;
    &.react-datepicker__month-container {
        z-index: 10;
    }
    &:disabled {
        /* background: #dbdbdb; */
        pointer-events: none;
        opacity: 0.7;
        &::placeholder {
            color: ${({ theme }) => theme.color.text};
        }
    }
    &::placeholder{
        color: ${({theme}) => theme.color.text};
    }
    ${(props) =>
        props.isError &&
        css`
            border: 1px solid red;
        `}
    @media ${({ theme }) => theme.media.phoneMD} {
        font-size: 16px;
    }
`;
