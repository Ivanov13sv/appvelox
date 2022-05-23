import styled, { css } from 'styled-components';

interface PhotoProps{
    width?: string;
    height?: string;
}

export const Photo = styled.img<PhotoProps>`
	border: 2px solid white;
    border-radius: 50%;
    width: ${props => props.width} || 'auto';
    height: ${props => props.height} || 'auto';

`;
