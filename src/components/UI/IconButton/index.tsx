import React, { FC } from 'react';
import * as S from './style';

interface IconButtonProps {
	icon: React.ReactNode;
	onClick?: () => void;

}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick}) => {
	return <S.IconButton type='button' onClick={() => onClick && onClick()}>{icon}</S.IconButton>;
};
