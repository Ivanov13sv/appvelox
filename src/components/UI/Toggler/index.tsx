import { FC } from 'react';
import styled from 'styled-components';
interface IToggler {
    theme: string;
    toggleTheme: () => void;
}

export const Toggler: FC<IToggler> = ({ theme, toggleTheme }) => {
    return (
        <StyledToggler>
            <input
                onChange={() => toggleTheme()}
                type="checkbox"
                checked={theme === 'dark' ? true : false}
            />
            <span className="check_box" />
        </StyledToggler>
    );
};

const StyledToggler = styled.label`
    cursor: pointer;
    width: 60px;
    height: 30px;
    background-color: lightgrey;
    position: relative;
    border-radius: 20px;
    input {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        position: absolute;
        &:checked {
            & ~ span {
                transform: translate(120%, -50%);
                background-color: ${({ theme }) => theme.color.otherElems};
            }
        }
    }
    span {
        transition: transform 0.3s ease;
        left: 0;
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        top: 50%;
        left: 0;
        transform: translate(20%, -50%);
    }
`;
