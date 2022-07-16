import { LoadableImage } from 'components/LoadbleImage';
import React, { FC } from 'react';
import styled from 'styled-components';

interface IAvatar extends IWrapper {
	src: string;
	alt: string;
}

interface IWrapper {
	width?: string;
	height?: string;
}

export const Avatar: FC<IAvatar> = ({ width, height,  alt, src }) => {
	return (
		<Wrapper width={width} height={height}>
			<LoadableImage src={src} alt={alt} />
		</Wrapper>
	);
};

const Wrapper = styled.div<IWrapper>`
	width: ${props => props.width || '40px'};
	height: ${props => props.height || '40px'};
	border-radius: 50%;
	overflow: hidden;
`;

const Photo = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
