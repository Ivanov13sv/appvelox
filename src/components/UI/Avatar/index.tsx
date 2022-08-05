import { LoadableImage } from 'components/LoadbleImage';
import { FC } from 'react';
import styled from 'styled-components';
import defaultAvatar from 'assets/img/defaultImage.jpg';

interface IAvatar extends IWrapper {
	src: string;
	alt: string;
}

interface IWrapper {
	width?: string;
	height?: string;
}

export const Avatar: FC<IAvatar> = ({ width, height, alt, src }) => {
	return (
		<Wrapper width={width} height={height}>
			<LoadableImage src={src ? src : defaultAvatar} alt={alt} />
		</Wrapper>
	);
};

const Wrapper = styled.div<IWrapper>`
	width: ${props => props.width || '40px'};
	height: ${props => props.height || '40px'};
	border-radius: 50%;
	overflow: hidden;
`;
