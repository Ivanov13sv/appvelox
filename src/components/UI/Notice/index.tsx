import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { FC, useEffect } from 'react';
import * as S from './style';

interface NoticeProps {
	timer: number;
}

export const Notice: FC<NoticeProps> = ({ timer }) => {
	const { isActive, text, status } = useAppSelector(state => state.notice);
	const { toggleNotice } = useActions();

	useEffect(() => {
		if (isActive) {
			const timeToHide = setTimeout(toggleNotice, timer);
			return () => {
				clearTimeout(timeToHide);
			};
		}
	});

	return (
		<S.Notice isActive={isActive} status={status}>
			<p>{text}</p>
		</S.Notice>
	);
};
