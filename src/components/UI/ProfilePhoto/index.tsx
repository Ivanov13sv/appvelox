import React, { FC } from 'react';
import * as S from './style';

interface ProfilePhotoProps {
	photo: any;
	width?: string;
	height?: string;
}

export const ProfilePhoto: FC<ProfilePhotoProps> = ({ photo, width, height }) => {
	return <S.Photo width={width} src={photo} height={height}/>;
};
