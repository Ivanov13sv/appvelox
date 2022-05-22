import React from 'react';
import { ReactComponent as ArrowDown } from 'assets/img/icons/back.svg';
import * as S from './style';

export const DropdownButton = () => {
	return (
		<S.DropdownButton>
			<ArrowDown />
		</S.DropdownButton>
	);
};
