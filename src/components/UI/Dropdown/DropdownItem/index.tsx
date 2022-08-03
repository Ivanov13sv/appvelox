import { FC } from 'react';
import { ListItem, ListItemProps } from 'components/ListItem';
import * as S from './style';
import { useActions } from 'hooks/useActions';

interface DropdownItemProps extends ListItemProps {
	goTo?: string;
	setMenuOpen?: (menu: string) => void;
	callback?: () => void;
}

export const DropdownItem: FC<DropdownItemProps> = ({
	leftIcon,
	text,
	rightIcon,
	goTo,
	callback,
	setMenuOpen,
}) => {
	const { closeDropdown } = useActions();
	const changeMenu = () => {
		if (goTo && setMenuOpen) {
			setMenuOpen(goTo);
		}
	};

	const cb = () => {
		if (callback) {
			callback();
			closeDropdown();
		}
	};

	return (
		<S.DropdownItem onClick={goTo ? changeMenu : cb}>
			<ListItem leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
		</S.DropdownItem>
	);
};
