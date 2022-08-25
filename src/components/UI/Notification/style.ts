import styled, { css, keyframes } from 'styled-components';
import { INotificationType } from 'types/notification';

interface INotificationItem {
	type: INotificationType;
	exit: boolean;
}

export const NotificationOverlay = styled.div`
	position: fixed;
	right: 10px;
	top: 50px;
	width: 300px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	z-index: 100;
`;

export const Bar = styled.div`
	position: absolute;
	height: 7px;
	background: transparent;
	bottom: 0;
	left: 0;
	border-radius: 0 0 5px 5px;
`;

const slideLeft = keyframes`
0%{
    margin-left: 120%;
}
100%{
    margin-left: 0;
}
`;
const slideRight = keyframes`
0%{
    margin-left: 0;
}
100%{
    margin-left: 120%;
}
`;

export const NotificationItem = styled.div<INotificationItem>`
	z-index: 600;

	width: 300px;
	overflow: hidden;
	background: white;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	padding: 15px;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: default;
	transition: transform 0.08s ease-in-out;
	animation: ${slideLeft} 0.4s forwards;
	p {
		display: flex;
		align-items: center;
		height: 30px;
	}

	svg {
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
		> * {
			stroke: grey;
		}
		&:hover {
			transform: scale(1.1);
			> * {
				stroke: black;
			}
		}
	}
	&:hover {
		transform: scale(1.02);
	}

	${props =>
		props.type === INotificationType.success &&
		css`
			${Bar} {
				background: #00da00;
			}
		`}
	${props =>
		props.type === INotificationType.error &&
		css`
			${Bar} {
				background: #ff5700;
			}
		`}
	${props =>
		props.type === INotificationType.warning &&
		css`
			${Bar} {
				background: #ffb700;
			}
		`}
    ${props =>
		props.exit &&
		css`
			animation: ${slideRight} 0.4s forwards;
		`}
`;

export const NotificationWrapper = styled.div`
	position: relative;
`;
