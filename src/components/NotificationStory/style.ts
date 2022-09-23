import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { INotificationType } from 'types/notification';

export const Wrapper = styled.article`
    box-shadow: ${({theme}) => theme.other.boxShadow};
    border-radius: 5px;
    /* background: #f8f8f8; */
    background: ${({theme}) => theme.color.secondary};
    transition: opacity 3s ease-in-out;
    padding: 15px;

    h3 {
        font-weight: 100;
        font-size: 15px;
        padding: 10px 0;
        color: white;
    }
    .showMore {
    }
    @media ${({ theme }) => theme.media.tablet} {
        width: 300px;
    }
`;

interface StoryItemProps {
    type: INotificationType;
    isChecked: boolean;
}
export const StoryItem = styled.div<StoryItemProps>`
    cursor: default;
    position: relative;
    font-size: 14px;
    margin-bottom: 8px;
    &:after {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        bottom: 6px;
        right: 15px;
        backdrop-filter: blur(2px);
        ${(props) =>
            props.type === INotificationType.success &&
            css`
                background-color: #13a113;
            `}
        ${(props) =>
            props.type === INotificationType.error &&
            css`
                background-color: red;
            `}
    }
    .date {
        font-size: 13px;
        color: white;
        font-weight: 500;
    }
    .message {
        font-size: 14px;
        color: white;
        font-weight: 500;
    }
    ${(props) =>
        props.isChecked &&
        css`
            .message {
                font-size: 14px;
                color: #fdfdfd;
                font-weight: 100;
            }
            .date {
                font-size: 13px;
                color: #f7f7f7;
                font-weight: 100;
            }
        `}
`;

export const ShowMore = styled(NavLink)`
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.accent};
    &:hover {
        color: ${({ theme }) => theme.color.darkenAccent};
    }
`;
