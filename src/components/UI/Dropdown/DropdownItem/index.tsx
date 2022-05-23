import { FC } from 'react';
import { ListItem, ListItemProps } from 'components/ListItem';
import * as S from './style';

interface DropdownItemProps extends ListItemProps {
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
			<ListItem leftIcon={leftIcon} text={text} rightIcon={rightIcon}/>
		</S.DropdownItem>
	);
};
