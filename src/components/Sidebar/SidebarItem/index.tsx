import React, { forwardRef } from 'react';
import { ListItemProps } from 'components/ListItem';
import { IconButton } from 'components/UI/IconButton';

import * as S from './style';

interface SidebarItemProps extends ListItemProps {
    isActive?: boolean | undefined;
    ref?: React.RefObject<HTMLLIElement>;
    to: string;
}

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>(
    (props, ref) => {
        const { leftIcon, text, rightIcon, isActive, to } = props;

        return (
            <S.SidebarItem ref={ref} to={to}>
                <S.SidebarBody isActive={isActive}>
                    <IconButton icon={leftIcon} />
                    <S.SidebarText>{text}</S.SidebarText>

                    {rightIcon && <IconButton icon={rightIcon} />}
                </S.SidebarBody>
            </S.SidebarItem>
        );
    }
);
