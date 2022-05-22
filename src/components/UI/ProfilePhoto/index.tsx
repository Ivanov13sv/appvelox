import React, { FC } from 'react';
import * as S from './style';

interface ProfilePhotoProps {
	photo: any;
}

export const ProfilePhoto: FC<ProfilePhotoProps> = ({ photo }) => {
	return <S.Photo src={photo} />;
};
