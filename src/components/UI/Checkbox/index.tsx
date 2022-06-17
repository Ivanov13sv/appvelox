import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import * as S from './style';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({error = false, ...props}) => {
	return (
		<S.WrapperCheckbox>
			<S.Input type="checkbox" error={error} {...props} />
			{/* <input type="checkbox" {...props} /> */}
			<span></span>
		</S.WrapperCheckbox>
	);
};
