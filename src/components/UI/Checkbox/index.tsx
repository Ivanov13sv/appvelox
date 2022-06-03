import React, { FC } from 'react';
import styled from 'styled-components';
import * as S from './style';

interface CheckboxProps {}

export const Checkbox: FC<CheckboxProps> = () => {
	return (
		<S.WrapperCheckbox>
			<input type="checkbox" />
			<span></span>
		</S.WrapperCheckbox>
	);
};
