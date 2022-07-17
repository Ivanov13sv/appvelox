import React, { FC, useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { INotification } from 'types/notification';
import { useActions } from 'hooks/useActions';
import * as S from './style';



export const Notification: FC<INotification> = ({ id, message, type }) => {
	const [exit, setExit] = useState(false);
	const [width, setWidth] = useState(0);
	const [intervalID, setIntervalId] = useState<NodeJS.Timer | null>(null);
	const { removeNotification } = useActions();

	const handleStartTimer = () => {
		const id = setInterval(() => {
			setWidth(prev => {
				if (prev < 100) {
					return prev + 0.5;
				}
				clearInterval(id);
				return prev;
			});
		}, 20);

		setIntervalId(id);
	};

	const handlePauseTimer = () => {
		if (intervalID) {
			clearInterval(intervalID);
		}
	};

	const handleCloseNotification = () => {
		handlePauseTimer();
		setExit(true);
		setTimeout(() => {
			removeNotification(id);
		}, 400);
	};

	useEffect(() => {
		if (width === 100) handleCloseNotification();
	}, [width]);

	useEffect(() => {
		handleStartTimer();
	}, []);
	return (
		<S.NotificationWrapper>
			<S.NotificationItem
				onMouseEnter={handlePauseTimer}
				onMouseLeave={handleStartTimer}
				type={type}
				exit={exit}
			>
				<p>{message}</p>
				<GrClose onClick={() => handleCloseNotification()} />

				<S.Bar style={{ width: `${width}%` }} />
			</S.NotificationItem>
		</S.NotificationWrapper>
	);
};
