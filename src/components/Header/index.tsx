import React from 'react';
import { Navbar } from 'components/UI/Navbar';
import { NavbarItem } from 'components/UI/Navbar/NavbarItem';
import { ProfilePhoto } from 'components/UI/ProfilePhoto';
import { Dropdown } from 'components/UI/Dropdown';
import { DropdownButton } from 'components/UI/Dropdown/DropdownButton';

import { ReactComponent as Eye } from 'assets/img/icons/eye.svg';
import { ReactComponent as Search } from 'assets/img/icons/search.svg';
import { ReactComponent as Bell } from 'assets/img/icons/bell.svg';

import photo from 'assets/img/profile_photo.png';

import * as S from './style';

export const Header = () => {
	return (
		<S.Header>
			<S.HeaderBody>
				<S.ProfileTitle>Мой профиль</S.ProfileTitle>
				<Navbar>
					<NavbarItem icon={<Search />} />
					<NavbarItem icon={<Bell />} />
					<NavbarItem icon={<Eye />} />
					<ProfilePhoto photo={photo} />
					<NavbarItem icon={<DropdownButton />}>
						<Dropdown isOpen={true}/>
					</NavbarItem>
				</Navbar>

			</S.HeaderBody>
		</S.Header>
	);
};
