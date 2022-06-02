import { SectionTitle } from 'components/SectionTitle';
import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as BackArrow } from 'assets/img/icons/back-arrow.svg';
import * as S from './style';

interface MainProps {
	children?: JSX.Element;
}

export const Main: FC<MainProps> = ({ children }) => {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState<string>();

	useEffect(() => {
		setCurrentPath(location?.pathname);
	}, [location]);

	const titles = [
		{ path: '/profile', title: 'Записи на приём', to: null },
		{ path: '/profile/appointment', title: 'Мои записи', to: '/profile', icon: <BackArrow /> },
		{ path: '/doctors', title: 'Врачи и клиники', to: null },
		{ path: '/messages', title: 'Сообщения', to: null },
		{ path: '/test', title: 'Тестирование', to: null },
		{ path: '/goodtoknow', title: 'Полезно знать', to: null },
	];

	return (
		<S.Main>
			<S.Titles>
				{titles.map((item, index) => (
					<SectionTitle
						key={`title${index}`}
						active={currentPath === item.path}
						title={item.title}
						icon={item.icon}
						to={item.to}
					/>
				))}
			</S.Titles>
			{children}
		</S.Main>
	);
};
