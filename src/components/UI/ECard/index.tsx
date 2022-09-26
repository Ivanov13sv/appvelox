import React, { FC } from 'react';
import * as S from './style';

interface ECardProps {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}

export const ECard: FC<ECardProps> = ({ title, icon, children }) => {
    return (
        <S.ECardItem>
            <S.CardItemIcon>{icon}</S.CardItemIcon>
            <S.CardItemBody>
                <h4>{title}</h4>
                {children}
            </S.CardItemBody>
        </S.ECardItem>
    );
};
