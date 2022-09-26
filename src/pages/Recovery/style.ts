import styled from 'styled-components';

export const Recovery = styled.section`
    text-align: center;
    max-width: 346px;
    margin: 0 auto;
    h2 {
        font-weight: 300;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        color: ${({ theme }) => theme.color.text};
        padding-bottom: 15px;
    }
    span {
        display: block;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        padding-bottom: 34px;
        color: ${({ theme }) => theme.color.text};
    }

    form {
        display: flex;
        flex-direction: column;
        span {
            color: #c5c5c5;
            padding-bottom: 14px;
        }
        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            padding-bottom: 30px;
            input[type='number'] {
                -moz-appearance: textfield;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            input {
                width: 40px;
                height: 40px;
                border-radius: 5px;
                outline: none;
                border: 1px solid black;
                font-size: 20px;
                text-align: center;
            }
        }
        a {
            padding-top: 15px;
        }
    }
`;
