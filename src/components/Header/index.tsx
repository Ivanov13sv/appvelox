import { Navbar } from 'components/Navbar';
import { NavbarItem } from 'components/Navbar/NavbarItem';
import { Dropdown } from 'components/UI/Dropdown';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ReactComponent as Bell } from 'assets/img/icons/bell.svg';
import { useAppSelector } from 'hooks/useAppSelector';
import { Avatar } from 'components/UI/Avatar';
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
                <S.ProfileTitle to="profile">Appvelox</S.ProfileTitle>
                <Navbar>
                    <NavbarItem icon={<Bell />} newAction={newAction}>
                        <NotificationStory story={activities} />
                    </NavbarItem>
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
