import styled, { keyframes } from 'styled-components';
import { LocalLoaderProps } from './index';

const rotate = keyframes`
0%{
    transform: rotate(0deg)
}

100%{
    transform: rotate(360deg)
}
`;

export const Loader = styled.div<LocalLoaderProps>`
	width: ${props => props.width || '100%'} ;
	height: ${props => props.height  || '100%'};
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.color.darkenAccent};
	border-left: 2px solid ${({ theme }) => theme.color.secondary};
	animation: ${rotate} 1s infinite;
`;
