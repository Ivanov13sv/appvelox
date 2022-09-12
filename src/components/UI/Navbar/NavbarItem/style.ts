import styled, { css, keyframes } from 'styled-components';

interface INavbarItem {
	newAction: boolean;
}

export const NavbarItem = styled.li<INavbarItem>`
	-webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
	backface-visibility: hidden;
	position: relative;
	z-index: 20;
	svg {
		transition: transform 0.2s ease;
		color: white;
	}
	&:hover {
		> {
			button {
				svg {
					transform: scale(1.3);
				}
			}
		}
	}
	${props =>
		props.newAction &&
		css`
			&:after {
				content: '';
				position: absolute;
				right: 0;
				bottom: 15%;
				width: 5px;
				height: 5px;
				background-color: red;
				border-radius: 50%;
				pointer-events: none;
			}
		`}
`;
const appearance = keyframes`
0%{
	/* transform: translate(10%, 20%); */
    transform: scale(0.85);
}
100%{
    transform: scale(1);
	transform: translate(30px, 40px);

}
`;

export const Content = styled.div`
	transform: translate(30px, 40px);
	position: absolute;
	top: 0;
	right: 0;
	animation: ${appearance} 0.3s;
`;

// keyframes