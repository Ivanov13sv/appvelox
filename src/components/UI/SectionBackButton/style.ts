import styled, { keyframes } from 'styled-components';

const moving = keyframes`
0%{
    transform: translateX(0);
}

50%{
    transform: translateX(-50%);

}

100%{
    transform: translateX(0);
}
`;

export const BackButton = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: grey;
    svg {
        color: grey;
    }
    &:hover {
        color: black;
        svg {
            color: black;
            animation: ${moving} 0.5s infinite;
        }
    }
`;
