import React, { forwardRef } from 'react';
import { ListItem } from 'components/ListItem';
import { ListItemProps } from 'components/ListItem';

import * as S from './style';

interface SidebarItemProps extends ListItemProps {
	isActive?: boolean;
	setActive?: (state: number) => void;
	index?: number;
	ref?: React.RefObject<HTMLLIElement>;
}

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>((props, ref) => {
	const { leftIcon, text, rightIcon, isActive, index, setActive } = props;

	const toggleActive = () => {
		if (index && setActive) setActive(index - 1);
	};

	return (
		<S.SidebarItem ref={ref} isActive={isActive} onClick={toggleActive}>
			<ListItem leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
		</S.SidebarItem>
	);
});
