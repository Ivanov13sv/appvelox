import React, { forwardRef } from 'react';
import { ListItem } from 'components/ListItem';
import { ListItemProps } from 'components/ListItem';
import { NavLink } from 'react-router-dom';

import * as S from './style';

interface SidebarItemProps extends ListItemProps {
	isActive?: boolean;
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
		<S.SidebarItem ref={ref} isActive={isActive} onClick={toggleActive}>
			<NavLink to={to}>
				<ListItem  leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
			</NavLink>
		</S.SidebarItem>
	);
});
