import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

export const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    backdrop-filter: blur(8px);
    background-color:rgba(0, 0, 0, 0.3);
`;

export const Spiner = styled.div`

    color: white;
	position: absolute;
	font-size: 11px;
	top: 50%;
	left: 50%;
	/* -webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0); */
	transform: translate(-50%, -50%);

	background: white;
	-webkit-animation-delay: -0.6s;
	animation-delay: -0.6s;
	width: 1em;
	height: 4em;
	&,
	&:after,
	&:before {
		background: #6c5a5a;
		-webkit-animation: ${load} 1.2s infinite ease-in-out;
		animation: ${load} 1.2s infinite ease-in-out;
		width: 1em;
		height: 4em;

		background: white;
		border-radius: 30px;
	}

	&:after,
	&:before {
		position: absolute;
		top: 0;
		content: '';
	}

	&:before {
		left: -1.5em;
		-webkit-animation-delay: -0.3s;
		animation-delay: -0.3s;
	}

	&:after {
		left: 1.5em;
		-webkit-animation-delay: -0.9s;
		animation-delay: -0.9s;
	}
`;
