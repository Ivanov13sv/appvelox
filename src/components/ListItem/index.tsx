import React, { FC } from 'react';
import * as S from './style';

export interface ListItemProps {
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	text?: string;
}

export const ListItem: FC<ListItemProps> = ({ leftIcon, text, rightIcon }) => {
	return (
		<S.ListItem>
			{leftIcon && <S.LeftIcon  icon={leftIcon} />}
			<S.ListItemText> {text}</S.ListItemText>
			{rightIcon && <S.RightIcon icon={rightIcon} />}
		</S.ListItem>
	);
};
