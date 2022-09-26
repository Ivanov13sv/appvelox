import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    background-color: ${({ theme }) => theme.color.secondary};
    padding: 0 20px;
    grid-area: header;
    @media ${({ theme }) => theme.media.desktop} {
        padding: 0 40px;
    }
`;

export const HeaderBody = styled.section`
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${({ theme }) => theme.media.desktop} {
        height: 55px;
    }
`;

export const ProfileTitle = styled(NavLink)`
    font-size: 20px;
    line-height: 33px;
    color: #ffffff;
    text-decoration: none;
    @media ${({ theme }) => theme.media.desktop} {
        font-size: 22px;
    }
`;

export const HeaderList = styled.ul`
    display: flex;
`;

export const ListItem = styled.li``;

export const ProfileImage = styled.div``;
