import React, { FC } from 'react';
import * as S from './style';

interface MainProps {
	children?: React.ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
	return (
		<S.Main>
			<S.Title>Записи на прием</S.Title>
			{children}
		</S.Main>
	);
};
