import React, { FC } from 'react';
import * as S from './style';

export interface ListItemProps {
	leftIcon?: any;
	rightIcon?: React.ReactNode;
	text?: string;
}

export const ListItem: FC<ListItemProps> = ({ leftIcon, text, rightIcon }) => {
	return (
		<S.ListItem>
			{leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}
			<S.ListItemText> {text}</S.ListItemText>
			{rightIcon && <S.RightIcon>{rightIcon}</S.RightIcon>}
		</S.ListItem>
	);
};
