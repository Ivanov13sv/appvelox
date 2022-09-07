import styled, { css } from 'styled-components';
import { BsListCheck } from 'react-icons/bs';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { INotificationType } from 'types/notification';

interface StyledActivityItemProps {
    type: INotificationType;
    checked: boolean;
}

export const ActivityItem = styled.li<StyledActivityItemProps>`
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px green;
    background-color: white;
    position: relative;
    color: black;
    border: 1.6px solid green;

    .message {
        font-weight: 500;
    }
    .date {
        color: #5a5a5a;
        flex: 0 1 auto;
        font-size: 15px;
    }
    .controllers {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    svg {
        color: #555555;
        font-size: 18px;
        transition: transform 0.1s ease-in-out;
        &:hover {
            transform: scale(1.3);
            color: black;
        }
    }
    .status {
        position: absolute;
        top: 0;
        right: 10%;
        transform: translateY(-55%);
        padding: 0 10px;
        border-radius: 5px;
        background-color: white;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background-color: whitesmoke;
    }
    &:active {
        background-color: #e9e9e9;
    }

    ${(props) =>
        props.type === 'error' &&
        css`
            box-shadow: 0px 0px 5px 0px red;
            border: 1px solid red;
        `}

    ${(props) =>
        props.checked &&
        css`
            .message {
                font-weight: 400;
                color: #5c5c5c;
            }
            & {
                box-shadow: none;
            }
        `}
`;

export const ActivityList = styled.ul`
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;
    padding-top: 15px;
`;

export const DeleteAll = styled(MdOutlineDeleteSweep)``;
export const ToggleAll = styled(BsListCheck)``;

export const ListControllButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    svg {
        cursor: pointer;
        font-size: 30px;
        transition: transform 0.1s ease-in-out;
        color: #5c5c5c;
        &:hover {
            transform: scale(1.3);
            color: black;
        }
    }
`;
