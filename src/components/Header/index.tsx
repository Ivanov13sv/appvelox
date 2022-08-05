import React, { useEffect } from 'react';
import { Navbar } from 'components/UI/Navbar';
import { NavbarItem } from 'components/UI/Navbar/NavbarItem';
import { ProfilePhoto } from 'components/UI/ProfilePhoto';
import { Dropdown } from 'components/UI/Dropdown';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

import { ReactComponent as Eye } from 'assets/img/icons/eye.svg';
import { ReactComponent as Search } from 'assets/img/icons/search.svg';
import { ReactComponent as Bell } from 'assets/img/icons/bell.svg';
import { useAppSelector } from 'hooks/useAppSelector';
import { Avatar } from 'components/UI/Avatar';

import * as S from './style';

export const Header = () => {
	const { avatar } = useAppSelector(state => state.userAuth);

	return (
		<S.Header>
			<S.HeaderBody>
				<S.ProfileTitle>Мой профиль</S.ProfileTitle>
				<Navbar>
					<NavbarItem icon={<Search />} />
					<NavbarItem icon={<Bell />} />
					<NavbarItem icon={<Eye />} />
					<ProfilePhoto width="50px" height="50px" photo={avatar} />
					<Avatar alt='avatar' src={avatar} />
					{/* <Avatar
						border="2px solid white"
						width="50px"
						height="50px"
						alt="avatar"
						src={avatar}
						fallback={
							'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
						}
					/> */}
					<NavbarItem icon={<BsFillGrid3X3GapFill />}>
						<Dropdown isOpen={true} />
					</NavbarItem>
				</Navbar>
			</S.HeaderBody>
		</S.Header>
	);
};
