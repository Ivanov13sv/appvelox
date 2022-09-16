import { Calendar } from 'react-calendar';
import styled from 'styled-components';

export const BigCalendar = styled(Calendar)`
    box-shadow: 0px 0px 5px #ebe7ff;
    border: none;
    border-radius: 10px;
    padding: 0.5rem;
    width: 100%;
    svg {
        font-size: 16px;
    }
    abbr {
        text-decoration: none;
        font-size: 12px;
    }
    .react-calendar__navigation span {
        font-size: 14px;
    }
    .react-calendar__tile--now {
        color: ${({ theme }) => theme.color.secondary};
        background-color: white;
    }
    .react-calendar__month-view__days__day--weekend {
        color: #000000;
    }
    .react-calendar__viewContainer {
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
        }
        &:focus {
            background: ${({ theme }) => theme.color.main};
        }
        svg {
            color: ${({ theme }) => theme.color.accent};
        }

        @media ${({ theme }) => theme.media.tablet} {
            height: 80px;
        }
    }
    .react-calendar__tile--active {
        background: ${({ theme }) => theme.color.main};
        color: white;

        &:enabled:hover {
            background: ${({ theme }) => theme.color.main};
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
