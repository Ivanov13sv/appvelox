import React, { FC } from 'react';
import * as S from './style';

interface NoticeProps {
	isActive: boolean;
	text: string;
}

export const Notice: FC<NoticeProps> = ({ isActive, text = '' }) => {
	return (
		<S.Notice isActive={isActive}>
			<p>{text}</p>
		</S.Notice>
	);
};
