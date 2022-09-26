import { FC } from 'react';
import defaultAvatar from 'assets/img/defaultImage.jpg';
import * as S from './style';

interface ProfilePhotoProps {
    photo: any;
    width?: string;
    height?: string;
    border?: string;
}

export const ProfilePhoto: FC<ProfilePhotoProps> = ({ photo, ...props }) => {
    return <S.Photo src={photo ? photo : defaultAvatar} {...props} />;
};
