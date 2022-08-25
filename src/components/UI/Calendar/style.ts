import { Calendar } from 'react-calendar';
import styled from 'styled-components';

export const BigCalendar = styled(Calendar)`
    box-shadow: 0px 0px 5px #ebe7ff;
    border: none;
    border-radius: 10px;
    width: 650px;
    padding: 2rem;
    svg {
        font-size: 16px;
    }
    abbr {
        text-decoration: none;
        font-size: 15px;
    }
    .react-calendar__navigation span {
        font-size: 16px;
    }
    .react-calendar__tile--now {
        color: ${({ theme }) => theme.color.secondary};
        background-color: white;
    }
    .react-calendar__month-view__days__day--weekend {
        color: #000000;
    }
    .react-calendar__viewContainer{
        padding-top: 50px;
    }

    .tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        height: 80px;
        &:hover {
            background: #f5f5f5;
        }
        &:focus {
            background: ${({ theme }) => theme.color.main};
        }
        svg {
            color: ${({ theme }) => theme.color.accent};
        }
    }
    .react-calendar__tile--active {
        background: ${({ theme }) => theme.color.main};
        color: white;

        &:enabled:hover {
            background: ${({ theme }) => theme.color.main};
        }
    }
`;
