import { Navbar } from 'components/UI/Navbar';
import { NavbarItem } from 'components/UI/Navbar/NavbarItem';
import { Dropdown } from 'components/UI/Dropdown';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ReactComponent as Eye } from 'assets/img/icons/eye.svg';
import { ReactComponent as Search } from 'assets/img/icons/search.svg';
import { ReactComponent as Bell } from 'assets/img/icons/bell.svg';
import { useAppSelector } from 'hooks/useAppSelector';
import { Avatar } from 'components/UI/Avatar';
import { Tooltip } from 'components/UI/Tooltip';
import { NotificationStory } from 'components/NotificationStory';
import { useEffect, useState } from 'react';

import * as S from './style';

export const Header = () => {
    const {
        authInfo: { avatar },
    } = useAppSelector((state) => state.authInfo);
    const [newAction, setNewAction] = useState(false);
    const { activities } = useAppSelector((state) => state.userActivity);

    useEffect(() => {
        activities.some((item) => item.checked === false)
            ? setNewAction(true)
            : setNewAction(false);
    }, [activities]);

    return (
        <S.Header>
            <S.HeaderBody>
                <S.ProfileTitle>Мой профиль</S.ProfileTitle>
                <Navbar>
                    <NavbarItem icon={<Search />} />
                    <Tooltip content={<NotificationStory story={activities} />}>
                        <NavbarItem icon={<Bell />} newAction={newAction} />
                    </Tooltip>
                    <NavbarItem icon={<Eye />} />
                    <Avatar
                        border="2px solid white"
                        alt="avatar"
                        src={avatar}
                    />
                    <NavbarItem icon={<BsFillGrid3X3GapFill />}>
                        <Dropdown />
                    </NavbarItem>
                </Navbar>
            </S.HeaderBody>
        </S.Header>
    );
};
