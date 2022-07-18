import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as Heart } from 'assets/img/Sidebar-icons/heart.svg';
import { ReactComponent as Stethoscope } from 'assets/img/Sidebar-icons/stethoscope.svg';
import { ReactComponent as Message } from 'assets/img/Sidebar-icons/message.svg';
import { ReactComponent as Test } from 'assets/img/Sidebar-icons/test.svg';
import { ReactComponent as Book } from 'assets/img/Sidebar-icons/book.svg';
import { ReactComponent as Help } from 'assets/img/Sidebar-icons/help.svg';
import { Button } from 'components/UI/Button';

import logo from 'assets/img/Sidebar-icons/logo.png';
import { useActions } from 'hooks/useActions';
import * as S from './style';

import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
	const sidebarItems = [
		{ leftIcon: <Heart />, text: 'Профиль', path: 'profile' },
		{ leftIcon: <Stethoscope />, text: 'Врачи и клиника', path: 'doctors' },
		{ leftIcon: <Message />, text: 'Сообщения', path: 'messages' },
		{ leftIcon: <Test />, text: 'Тестирование', path: 'test' },
		{ leftIcon: <Book />, text: 'Полезно знать', path: 'goodtoknow' },
	];
	const [activeItem, setActiveItem] = useState(0);
	const [height, setHeight] = useState(0);
	const { toggleModal } = useActions();
	const ref = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current?.clientHeight);
		}
	}, [ref]);

	return (
		<S.Sidebar>
			<S.SidebarTop>
				<S.SidebarLogo>Логотип</S.SidebarLogo>
			</S.SidebarTop>

			<S.SidebarMain>
				<S.SidebarActiveItem style={{ height: height, top: `${height * activeItem}px` }} />
				{sidebarItems.map((item, index) => (
					<SidebarItem
						to={item.path}
						ref={ref}
						index={index + 1}
						key={index}
						leftIcon={item.leftIcon}
						text={item.text}
						isActive={index === activeItem}
						setActive={setActiveItem}
					/>
				))}
				<Button onClick={() => toggleModal()}>Подать заявку</Button>
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
