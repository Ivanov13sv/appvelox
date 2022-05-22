import { FC } from 'react';
import * as S from './style';

interface NavbarProps {
	children?: React.ReactNode;
}

export const Navbar: FC<NavbarProps> = ({ children }) => {
	return (

		<S.Navbar>
			<S.NavBody>
				<S.NavList>{children}</S.NavList>
			</S.NavBody>
		</S.Navbar>
	);
};
