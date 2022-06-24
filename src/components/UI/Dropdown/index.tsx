import React, { useState, useRef, useEffect } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { MdPerson } from 'react-icons/md';
import { MdChevronRight, MdOutlineExitToApp } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { getAuth, signOut } from 'firebase/auth';
import { DropdownItem } from './DropdownItem';

import * as S from './style';

export const Dropdown = () => {
	const [menuOpen, setMenuOpen] = useState('main');
	const [menuHeight, setMenuHeight] = useState<null | number>();
	const { logOut } = useActions();

	const mainMenuRef = useRef<HTMLUListElement>(null);
	const secondaryMenuRef = useRef<HTMLUListElement>(null);
	const auth = getAuth();


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

	return (
		<S.Dropdown style={{ height: `${menuHeight && menuHeight + 35}px` }}>
			<S.Menu ref={mainMenuRef} menuOpen={menuOpen === 'main'}>
				<DropdownItem text="Мой профиль" leftIcon={<MdPerson />} />
				<DropdownItem text="Мой профиль" leftIcon={<MdPerson />} />
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
						<MdChevronRight size={'1.5em'} style={{ transform: 'rotate(180deg)' }} />
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
	);
};
