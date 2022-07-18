import { FC, InputHTMLAttributes } from 'react';
import * as S from './style';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({error = false, ...props}) => {
	return (
		<S.WrapperCheckbox>
			<S.Input type="checkbox" error={error} {...props} />
			<span></span>
		</S.WrapperCheckbox>
	);
};
