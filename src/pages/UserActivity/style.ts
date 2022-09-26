import styled, { css } from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { INotificationType } from 'types/notification';
import { Section } from 'components/Section';

interface StyledActivityItemProps {
    type: INotificationType;
    checked: boolean;
}

export const ActivitySection = styled(Section)`
    display: flex;
    flex-direction: column;
`;

export const ActivityItem = styled.li<StyledActivityItemProps>`
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.uiBase};
    position: relative;
    color: ${({ theme }) => theme.color.text};
    border: 2px solid ${({ theme }) => theme.color.success};

    .message {
        font-weight: 500;
        color: ${({ theme }) => theme.color.text};
    }
    .date {
        color: ${({ theme }) => theme.color.text};
        flex: 0 1 auto;
        font-weight: 500;
        font-size: 15px;
    }
    .controllers {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    svg {
        color: ${({ theme }) => theme.color.text};
        font-size: 18px;
        transition: transform 0.1s ease-in-out;
        &:hover {
            transform: scale(1.3);
        }
    }
    .status {
        position: absolute;
        top: 0;
        right: 10%;
        transform: translateY(-55%);
        padding: 0 10px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.color.uiBase};
        color: ${({ theme }) => theme.color.text};
    }
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${(props) =>
        props.type === 'error' &&
        css`
            border: 2px solid ${({ theme }) => theme.color.error};
        `}
    ${(props) =>
        props.type === 'error' &&
        props.checked &&
        css`
            border: 2px solid #e3000061;
        `}
    ${(props) =>
        props.type === 'success' &&
        props.checked &&
        css`
            border: 2px solid #0076006b;
        `}

    ${(props) =>
        props.checked &&
        css`
            .message {
                font-weight: 100;
            }
            .date {
                font-weight: 100;
            }
            & {
                box-shadow: none;
            }
        `}
        @media ${({ theme }) => theme.media.tablet} {
        &:active {
            background-color: #e9e9e9;
        }
        &:hover {
            svg {
                font-size: 18px;
                transition: transform 0.1s ease-in-out;
                &:hover {
                    transform: scale(1.3);
                }
            }
            filter: brightness(85%);
        }
    }
`;

export const ActivityList = styled.ul`
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;
    max-height: 400px;
    overflow-y: auto;
    padding: 0 10px;
    h2 {
        text-align: center;
        font-weight: 400;
    }
    @media ${({ theme }) => theme.media.desktop} {
        width: 800px;
        margin: 0 auto;
        padding: 15px 20px;
        max-height: 700px;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: #ebe7ff;
            border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background: #003b72;
            border-radius: 5px;
        }
    }
`;

export const DeleteAll = styled(MdOutlineDeleteSweep)``;
export const ToggleAll = styled(BsListCheck)``;

export const ListControllButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 40px;
    svg {
        cursor: pointer;
        font-size: 30px;
        transition: transform 0.1s ease-in-out;
        color: ${({ theme }) => theme.color.text};
        &:hover {
            transform: scale(1.3);
            color: ${({ theme }) => theme.color.text};
        }
    }
`;
