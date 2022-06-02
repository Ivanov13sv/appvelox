import { FC, useState } from 'react';
import { IconButton } from 'components/UI/IconButton';
import { useSelector } from 'react-redux';
import * as S from './style';

interface NavbarItemProps {
	icon: React.ReactNode;
	children?: React.ReactNode;
}

export const NavbarItem: FC<NavbarItemProps> = ({ icon, children }) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const dropdown = useSelector(state => state);


	const onToggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};
	return (
		<S.NavbarItem>
			<IconButton icon={icon} onClick={onToggleDropdown} />
			{isDropdownOpen && children}
		</S.NavbarItem>
	);
};
