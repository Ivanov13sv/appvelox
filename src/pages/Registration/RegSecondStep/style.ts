import styled from 'styled-components';

export const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Radio = styled.label`
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    width: 33px;
    height: 33px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.color.accent};
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    transition: box-shadow 0.125s ease;
    input {
        appearance: none;
        &:checked + span {
            background: ${({ theme }) => theme.color.accent};
            color: white;
        }
    }

    span {
        transition: 0.3s ease;
        position: absolute;
        width: 100%;
        height: 100%;
        background: transparent;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.color.accent};
    }
    &:hover {
        box-shadow: 0 0 2px 1px ${({ theme }) => theme.color.accent};
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    > *:not(:last-child) {
        margin-right: 10px;
    }
`;

export const RadioLabel = styled.span``;
