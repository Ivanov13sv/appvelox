import React, { useState, useRef, useEffect } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { MdPerson } from 'react-icons/md';
import { MdChevronRight, MdOutlineExitToApp } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';

import { useActions } from 'hooks/useActions';
import { DropdownItem } from './DropdownItem';

import * as S from './style';

export const Dropdown = () => {
	const [menuOpen, setMenuOpen] = useState('main');
	const [menuHeight, setMenuHeight] = useState<null | number>();
	const {logOut} = useActions();

	const mainMenuRef = useRef<HTMLUListElement>(null);
	const secondaryMenuRef = useRef<HTMLUListElement>(null);

	const signOut = () =>{
		logOut();
		localStorage.setItem('activeItem', '0');
	}

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
				<DropdownItem callback={signOut} text="Выйти" leftIcon={<MdOutlineExitToApp />} />
			</S.SecondaryMenu>

			{/* <S.SecondaryMenu>321</S.SecondaryMenu> */}
		</S.Dropdown>
	);
};
