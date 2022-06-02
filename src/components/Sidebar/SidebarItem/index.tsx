import React, { forwardRef } from 'react';
import { ListItem } from 'components/ListItem';
import { ListItemProps } from 'components/ListItem';
import { NavLink } from 'react-router-dom';
import { IconButton } from 'components/UI/IconButton';

import * as S from './style';

interface SidebarItemProps extends ListItemProps {
	isActive?: boolean | undefined;
	setActive?: (state: number) => void;
	index?: number;
	ref?: React.RefObject<HTMLLIElement>;
	to: string;
}

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>((props, ref) => {
	const { leftIcon, text, rightIcon, isActive, index, setActive, to } = props;

	const toggleActive = () => {
		if (index && setActive) setActive(index - 1);
	};

	return (
		<S.SidebarItem ref={ref} onClick={toggleActive} to={to}>
			<S.SidebarText isActive={isActive}>
				<IconButton icon={leftIcon} />
				{text}
				{rightIcon && <IconButton icon={rightIcon} />}
			</S.SidebarText>
		</S.SidebarItem>
	);
});
