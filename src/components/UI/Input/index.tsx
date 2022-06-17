import { useState, useEffect, ChangeEvent, forwardRef } from 'react';
import { ReactComponent as Eye } from 'assets/img/icons/VisuallyImpaired.svg';
import { IconButton } from '../IconButton';

import * as S from './style';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	label: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	isPassword?: boolean;
	placeholder?: string;
	type?: string;
	onBlur?: () => void;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { value, label, onChange, placeholder, type, isPassword = false, onBlur, error  = ''} = props;

	const [isFocus, setIsFocus] = useState(false);
	const [isShowedPass, setIsShowedPass] = useState(true);

	const onBlury = () => {
		if (!value && onBlur) {
			setIsFocus(false);
			onBlur();
		}
	};

	useEffect(() => {
		if (value) {
			setIsFocus(true);
		}
	}, [value]);

	const isShowPlaceholder = isFocus === true ? placeholder : '';
	const inputType = isShowedPass === true && type === 'password' ? 'password' : 'text';

	return (
		<S.InputWrapper>
			<S.Label isFocus={isFocus}>{label}</S.Label>
			<S.Input
				isError={!!error}
				ref={ref}
				type={inputType}
				value={value}
				onChange={onChange}
				onFocus={() => setIsFocus(true)}
				onBlur={onBlury}
				placeholder={isShowPlaceholder}
			/>
			{error && <S.ErrorMessage>{error}</S.ErrorMessage>}
			{isPassword && (
				<S.PasswordIcon isShowedPass={isShowedPass}>
					<IconButton onClick={() => setIsShowedPass(!isShowedPass)} icon={<Eye />} />
				</S.PasswordIcon>
			)}
		</S.InputWrapper>
	);
});
