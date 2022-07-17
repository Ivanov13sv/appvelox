import { useAppSelector } from 'hooks/useAppSelector';
import { FC } from 'react';
import { Notification } from './Notification';
import * as S from './style';

export const NotificationProvider: FC = props => {
	const { notifications } = useAppSelector(state => state.notification);

	return (
		<S.NotificationOverlay>
			{notifications.map(item => (
				<Notification key={item.id} {...item} />
			))}
		</S.NotificationOverlay>
	);
};
