import styled from 'styled-components';
import { IconButton } from 'components/UI/IconButton';

export const ListItem = styled.div`
    width: 100%;

    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const LeftIcon = styled(IconButton)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RightIcon = styled(LeftIcon)`
    margin-left: auto;
`;

export const ListItemText = styled.span`
    width: 100%;
    color: white;
`;
