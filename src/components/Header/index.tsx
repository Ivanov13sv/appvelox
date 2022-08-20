import { Navbar } from 'components/UI/Navbar';
import { NavbarItem } from 'components/UI/Navbar/NavbarItem';
import { Dropdown } from 'components/UI/Dropdown';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

import { ReactComponent as Eye } from 'assets/img/icons/eye.svg';
import { ReactComponent as Search } from 'assets/img/icons/search.svg';
import { ReactComponent as Bell } from 'assets/img/icons/bell.svg';
import { useAppSelector } from 'hooks/useAppSelector';
import { Avatar } from 'components/UI/Avatar';

import * as S from './style';

export const Header = () => {
	const { authInfo:{avatar} } = useAppSelector(state => state.authInfo);

	return (
		<S.Header>
			<S.HeaderBody>
				<S.ProfileTitle>Мой профиль</S.ProfileTitle>
				<Navbar>
					<NavbarItem icon={<Search />} />
					<NavbarItem icon={<Bell />} />
					<NavbarItem icon={<Eye />} />
					<Avatar border="2px solid white" alt="avatar" src={avatar} />
					<NavbarItem icon={<BsFillGrid3X3GapFill />}>
						<Dropdown isOpen={true} />
					</NavbarItem>
				</Navbar>
			</S.HeaderBody>
		</S.Header>
	);
};
