import { BsArrowRight } from 'react-icons/bs';
import { FC } from 'react';
import { NavLinkProps } from 'react-router-dom';
import { IconButton } from '../IconButton';
import { Avatar } from '../Avatar';
import * as S from './style';

interface DoctorCardProps extends NavLinkProps {
    photoSrc: string;
    name: string;
    speciality: string;
    description: string;
}

export const DoctorCard: FC<DoctorCardProps> = ({
    photoSrc,
    name,
    speciality,
    description,
    to,
}) => {
    const isLongDescr =
        description && description.length > 90
            ? description.slice(0, 90) + '...'
            : description;

    return (
        <S.Card>
            <S.Wrapper>
                <Avatar
                    width="80px"
                    height="80px"
                    alt="Доктор"
                    src={photoSrc}
                />
                <S.Name>{name}</S.Name>
                <S.Speciality>{speciality}</S.Speciality>
                <S.Description>{isLongDescr}</S.Description>
                <S.Details to={to}>
                    Подробнее
                    <IconButton icon={<BsArrowRight size={20} />} />
                </S.Details>
            </S.Wrapper>
        </S.Card>
    );
};
