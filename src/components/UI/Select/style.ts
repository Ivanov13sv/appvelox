import styled, { css } from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    width: 100vh;
    height: 100vh;
    background: red;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const SelectBox = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    position: relative;
    background-color: ${({ theme }) => theme.color.uiBase};
    border-radius: 8px;
`;

interface isActiveProps {
    isActive: boolean;
    isDisabled?: boolean;
}

export const SelectedOption = styled.span<isActiveProps>`
    padding: 12px 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    height: 45px;
    align-items: center;
    border-radius: 8px;

    svg {
        transition: transform 0.3s ease;
        color: ${({ theme }) => theme.color.darkenAccent};
        font-size: 20px;
    }
    ${(props) =>
        props.isActive &&
        css`
            svg {
                transform: rotateX(180deg);
            }
        `}
    ${(props) =>
        props.isDisabled &&
        css`
            pointer-events: none;
            opacity: 0.6;
        `}
`;

export const SelectIndicate = styled.div`
    width: 20px;
    height: 100%;
`;

export const OptionsContainer = styled.div<isActiveProps>`
    background-color: ${({ theme }) => theme.color.uiBase};
    top: 50px;
    position: absolute;
    color: ${({ theme }) => theme.color.text};
    max-height: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
    border-radius: 8px;
    overflow: hidden;
    z-index: 300;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    &::-webkit-scrollbar {
        width: 8px;
        background: #abaaaf;
        border-radius: 0 8px 8px 0;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.color.accent};
        border-radius: 0 8px 8px 0;
    }

    ${(props) =>
        props.isActive &&
        css`
            max-height: 150px;
            opacity: 1;
            overflow-y: scroll;
        `}
`;

export const Option = styled.div`
    padding: 12px 24px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.uiBase};
    input {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        position: absolute;
    }

    &:hover {
        filter: brightness(85%);
    }
`;
