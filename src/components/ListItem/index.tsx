import React, { FC } from 'react';
import * as S from './style';

export interface ListItemProps {
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    text?: string;
    children?: JSX.Element;
}

export const ListItem: FC<ListItemProps> = ({
    leftIcon,
    text,
    rightIcon,
    children,
}) => {
    return (
        <S.ListItem>
            {leftIcon && <S.LeftIcon icon={leftIcon} />}
            {children || <S.ListItemText> {text}</S.ListItemText>}
            {rightIcon && <S.RightIcon icon={rightIcon} />}
        </S.ListItem>
    );
};
