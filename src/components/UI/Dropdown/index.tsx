import React, { useState, useRef, useEffect, FC } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { MdPerson } from 'react-icons/md';
import { MdChevronRight, MdOutlineExitToApp } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';

import { useActions } from 'hooks/useActions';
import { getAuth, signOut } from 'firebase/auth';
import { useAppSelector } from 'hooks/useAppSelector';
import { DropdownItem } from './DropdownItem';

import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface DropdownProps {
	isOpen: boolean;
}

export const Dropdown: FC<DropdownProps> = ({ isOpen }) => {
	const [menuOpen, setMenuOpen] = useState('main');
	const [menuHeight, setMenuHeight] = useState<null | number>();
	const { logOut, closeDropdown, toggleModal } = useActions();
	const { user } = useAppSelector(state => state.currentUser);

	const mainMenuRef = useRef<HTMLUListElement>(null);
	const secondaryMenuRef = useRef<HTMLUListElement>(null);
	const auth = getAuth();

	const dropdownRef = useClickOutside(() => {
		closeDropdown();
	});

	const navigate = useNavigate();

	const exit = () => {
		signOut(auth)
			.then(() => {
				logOut();
			})
			.catch(error => {
				// An error happened.
			});
	};

	useEffect(() => {
		if (menuOpen === 'main') {
			setMenuHeight(mainMenuRef.current?.clientHeight);
		} else {
			setMenuHeight(secondaryMenuRef.current?.clientHeight);
		}
	}, [menuOpen]);
	console.log(user)

	return (
		<S.Overlay>
			<S.Dropdown ref={dropdownRef} style={{ height: `${menuHeight && menuHeight + 35}px` }}>
				<S.Menu ref={mainMenuRef} menuOpen={menuOpen === 'main'}>
					<S.Title>Привет, {user.firstName}! </S.Title>
					<DropdownItem
						text="Мой профиль"
						leftIcon={<MdPerson />}
						callback={() => navigate('/profile/userInfo')}
					/>
					<DropdownItem
						goTo="settings"
						setMenuOpen={setMenuOpen}
						text="Настойки"
						leftIcon={<BsGearFill />}
						rightIcon={<MdChevronRight size={'1.5em'} />}
					/>
				</S.Menu>
				<S.SecondaryMenu ref={secondaryMenuRef} menuOpen={menuOpen === 'settings'}>
					<DropdownItem
						goTo="main"
						setMenuOpen={setMenuOpen}
						leftIcon={
							<MdChevronRight
								size={'1.5em'}
								style={{ transform: 'rotate(180deg)' }}
							/>
						}
					/>
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
					<DropdownItem callback={exit} text="Выйти" leftIcon={<MdOutlineExitToApp />} />
				</S.SecondaryMenu>
			</S.Dropdown>
		</S.Overlay>
	);
};
