import { useState, useRef, useEffect, useMemo } from 'react';
import { ReactComponent as Heart } from 'assets/img/Sidebar-icons/heart.svg';
import { ReactComponent as Stethoscope } from 'assets/img/Sidebar-icons/stethoscope.svg';
import { ReactComponent as Message } from 'assets/img/Sidebar-icons/message.svg';
import { ReactComponent as Test } from 'assets/img/Sidebar-icons/test.svg';
import { ReactComponent as Help } from 'assets/img/Sidebar-icons/help.svg';
import { Button } from 'components/UI/Button';
import logo from 'assets/img/Sidebar-icons/logo.png';
import { useActions } from 'hooks/useActions';
import { useLocation } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';

import * as S from './style';

export const Sidebar = () => {
    const sidebarItems = useMemo(() => {
        return [
            { leftIcon: <Heart />, text: 'Профиль', path: '/profile' },
            { leftIcon: <Test />, text: 'Мои записи', path: '/appointments' },
            {
                leftIcon: <Stethoscope />,
                text: 'Врачи и клиника',
                path: '/doctors',
            },
            {
                leftIcon: <Message />,
                text: 'Уведомления',
                path: '/userActivity',
            },
        ];
    }, []);

    const [activeItem, setActiveItem] = useState(0);
    const [height, setHeight] = useState(0);
    const { openModal } = useActions();
    const ref = useRef<HTMLLIElement>(null);
    const location = useLocation();

    useEffect(() => {
        const isContainPath = sidebarItems.find(
            (item) => item.path === location.pathname
        );
        if (isContainPath) {
            setActiveItem(
                sidebarItems.findIndex(
                    (item) => item.path === location.pathname
                )
            );
        }
    }, [location, sidebarItems]);

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current?.clientHeight);
        }
    }, [ref]);

    return (
        <S.Sidebar>
            <S.SidebarTop>
                <S.SidebarLogo></S.SidebarLogo>
            </S.SidebarTop>

            <S.SidebarMain>
                <S.SidebarActiveItem
                    style={{ height: height, top: `${height * activeItem}px` }}
                />
                {sidebarItems.map((item, index) => (
                    <SidebarItem
                        to={item.path}
                        ref={ref}
                        key={index}
                        leftIcon={item.leftIcon}
                        text={item.text}
                        isActive={index === activeItem}
                    />
                ))}
                <Button onClick={() => openModal()}>Подать заявку</Button>
            </S.SidebarMain>
            <S.SidebarFooter>
                <SidebarItem leftIcon={<Help />} text="Помощь" to="/help" />

                <S.SidebarFooterLogo>
                    <img src={logo} alt="appvelox logo" />
                </S.SidebarFooterLogo>
            </S.SidebarFooter>
        </S.Sidebar>
    );
};
