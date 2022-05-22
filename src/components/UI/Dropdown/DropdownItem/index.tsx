import React, { FC } from 'react';
import * as S from './style';

interface DropdownItemProps {
	leftIcon?: any;
	rightIcon?: React.ReactNode;
	text?: string;
	goTo?: string;
	setMenuOpen?: (menu: string) => void;
}

export const DropdownItem: FC<DropdownItemProps> = ({
	leftIcon,
	text,
	rightIcon,
	goTo,
	setMenuOpen,
}) => {
	const changeMenu = () => {
		if (goTo && setMenuOpen) {
			setMenuOpen(goTo);
		}
	};

	return (
		<S.DropdownItem onClick={changeMenu}>
			<S.LeftIcon>{leftIcon}</S.LeftIcon>
			<S.DropdownText> {text}</S.DropdownText>

			<S.RightIcon>{rightIcon}</S.RightIcon>
		</S.DropdownItem>
	);
};
