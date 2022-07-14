import styled, { keyframes, css } from 'styled-components';

const load = keyframes`
    0%{
        left: -150px;
    }
    100%{
        left: 100%;
    }
`;

interface LoadableImageProps {
	isLoaded: boolean;
}

export const Wrapper = styled.div<LoadableImageProps>`
	height: 100%;
	position: relative;
	background: linear-gradient(101.42deg, #dfefff -0.04%, rgba(223, 239, 255, 0.27) 94.2%);
	overflow: hidden;
	&::before {
		content: '';
		display: block;
		position: absolute;
		left: -150px;
		top: 0;
		height: 100%;
		width: 150px;
		background: linear-gradient(to right, transparent 0%, whitesmoke 50%, transparent 100%);
		animation: ${props =>
			props.isLoaded
				? `none`
				: css`
						${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite
				  `};
	}
`;

export const Image = styled.img<LoadableImageProps>`
	opacity: ${props => (props.isLoaded ? '1' : '0')};
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: opacity 0.3s easy-in-out;
`;
