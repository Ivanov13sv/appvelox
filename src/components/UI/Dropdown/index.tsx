import { useState, useRef, useEffect } from 'react';
import { MdPerson } from 'react-icons/md';
import { MdChevronRight, MdOutlineExitToApp } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Toggler } from 'components/UI/Toggler';
import { BsFillMoonFill } from 'react-icons/bs';
import { useActions } from 'hooks/useActions';
import { getAuth, signOut } from 'firebase/auth';
import { useAppSelector } from 'hooks/useAppSelector';
import { DropdownItem } from './DropdownItem';

import * as S from './style';

export const Dropdown = () => {
    const [menuOpen, setMenuOpen] = useState('main');
    const [menuHeight, setMenuHeight] = useState<null | number>();
    const { logOut } = useActions();
    const { user } = useAppSelector((state) => state.currentUser);

    const mainMenuRef = useRef<HTMLUListElement>(null);
    const secondaryMenuRef = useRef<HTMLUListElement>(null);
    const auth = getAuth();
    const { toggleTheme } = useActions();
    const { theme } = useAppSelector((state) => state.theme);
    const navigate = useNavigate();

    const exit = () => {
        signOut(auth).then(() => logOut());
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
                <S.Title>Привет, {user.firstName}! </S.Title>
                <DropdownItem
                    text="Мой профиль"
                    leftIcon={<MdPerson />}
                    onClick={() => navigate('/profile/userInfo')}
                />
                <DropdownItem
                    switchMenu="settings"
                    setMenuOpen={setMenuOpen}
                    text="Настойки"
                    leftIcon={<BsGearFill />}
                    rightIcon={<MdChevronRight size={'1.5em'} />}
                />
            </S.Menu>
            <S.SecondaryMenu
                ref={secondaryMenuRef}
                menuOpen={menuOpen === 'settings'}
            >
                <DropdownItem
                    switchMenu="main"
                    setMenuOpen={setMenuOpen}
                    leftIcon={
                        <MdChevronRight
                            size={'1.5em'}
                            style={{ transform: 'rotate(180deg)' }}
                        />
                    }
                />
                <DropdownItem
                    onClick={toggleTheme}
                    text="Темная тема"
                    leftIcon={<BsFillMoonFill />}
                >
                    <Toggler theme={theme} toggleTheme={toggleTheme} />
                </DropdownItem>
                <DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
                <DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
                <DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
                <DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
                <DropdownItem text="Настойки" leftIcon={<BsGearFill />} />
                <DropdownItem text="Настойки" leftIcon={<BsGearFill />} />

                <DropdownItem
                    onClick={() => exit()}
                    text="Выйти"
                    leftIcon={<MdOutlineExitToApp />}
                />
            </S.SecondaryMenu>
        </S.Dropdown>
    );
};
