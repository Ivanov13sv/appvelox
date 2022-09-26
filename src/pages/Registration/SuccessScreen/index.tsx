import React from 'react';
import successReg from 'assets/img/LoginImgs/success.png';
import logo from 'assets/img/Sidebar-icons/logo.png';

import * as S from './style';

export const SuccessScreen = () => {
	return (
		<S.SuccessReg>
			<header />
			<S.SuccessBody>
				<h2>
					Вы успешно <br /> зарегистрировались!
				</h2>
				<span>Давайте приступим</span>
				<img src={successReg} alt="success registration" />
			</S.SuccessBody>
			<footer>
				<img src={logo} alt="logo" />
			</footer>
		</S.SuccessReg>
	);
};
