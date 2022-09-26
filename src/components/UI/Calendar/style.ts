import { Calendar } from 'react-calendar';
import styled from 'styled-components';

export const BigCalendar = styled(Calendar)`
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    border: none;
    border-radius: 10px;
    padding: 0.5rem;
    width: 100%;
    background-color: ${({ theme }) => theme.color.uiBase};
    svg {
        font-size: 16px;
    }
    abbr {
        text-decoration: none;
        font-size: 12px;
        color: ${({ theme }) => theme.color.text};
    }

    .react-calendar__navigation__arrow {
        color: ${({ theme }) => theme.color.text};
    }
    .react-calendar__navigation {
        button:hover {
            background-color: ${({ theme }) => theme.color.otherElems};
        }
        button {
            background-color: ${({ theme }) => theme.color.uiBase};
        }
    }
    .react-calendar__navigation span {
        font-size: 14px;
    }
    .react-calendar__tile--now {
        color: ${({ theme }) => theme.color.secondary};
        background-color: ${({ theme }) => theme.color.otherElems};
    }
    .react-calendar__month-view__days__day--weekend {
    }

    .react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
        color: ${({ theme }) => theme.color.text};
    }

    @media ${({ theme }) => theme.media.tablet} {
        padding: 2rem;
        .react-calendar__viewContainer {
            padding-top: 50px;
        }
        .react-calendar__navigation span {
            font-size: 16px;
        }
        abbr {
            font-size: 15px;
        }
    }
    .tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        height: 60px;

        &:hover {
            background: #f5f5f5;
            background: ${({ theme }) => theme.color.otherElems};
            span {
                color: red;
            }
        }
        &:focus {
            background: ${({ theme }) => theme.color.otherElems};
        }
        svg {
            color: #7aff00;
        }

        @media ${({ theme }) => theme.media.tablet} {
            height: 80px;
        }
    }
    .react-calendar__tile--active {
        background: none;

        &:enabled:hover {
            background: ${({ theme }) => theme.color.otherElems};
        }
    }
    @media ${({ theme }) => theme.media.desktop} {
        width: 500px;
    }
    @media ${({ theme }) => theme.media.desktopPlus} {
        width: 490px;
    }
    @media (min-width: 1450px) {
        width: 650px;
    }
`;
