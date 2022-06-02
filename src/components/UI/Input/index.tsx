import { useState, useEffect, ChangeEvent } from 'react';
import * as S from './style';
import { ReactComponent as Eye } from 'assets/img/icons/VisuallyImpaired.svg';
import { IconButton } from '../IconButton';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	label: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	isPassword?: boolean;
	placeholder?: string;
	type?: string;
}

export const Input = ({
	value,
	label,
	onChange,
	placeholder,
	type,
	isPassword = false,
}: InputProps) => {
	const [isFocus, setIsFocus] = useState(false);
	const [isShowedPass, setIsShowedPass] = useState(true);

	const onBlur = () => {
		if (!value) {
			setIsFocus(false);
		}
	};

	const isShowPlaceholder = isFocus === true ? placeholder : '';
	const inputType = isShowedPass === true && type === 'password' ? 'password' : 'text';



	return (
		<S.InputWrapper>
			<S.Label isFocus={isFocus}>{label}</S.Label>
			<S.Input
				type={inputType}
				value={value}
				onChange={onChange}
				onFocus={() => setIsFocus(true)}
				onBlur={onBlur}
				placeholder={isShowPlaceholder}
			/>
			{isPassword && (
				<S.PasswordIcon isShowedPass={isShowedPass}>
					<IconButton onClick={() => setIsShowedPass(!isShowedPass)} icon={<Eye />} />
				</S.PasswordIcon>
			)}
		</S.InputWrapper>
	);
};
