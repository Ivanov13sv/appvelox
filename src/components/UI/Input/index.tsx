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
    autoFocus?: boolean;
    togglerShowingValue?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        value,
        label,
        onChange,
        placeholder,
        type,
        isPassword = false,
        onBlur,
        error = '',
        autoFocus = false,
        togglerShowingValue = false,
    } = props;
	

    const [isFocus, setIsFocus] = useState(false);
    const [inputType, setInputType] = useState(() => {
        return togglerShowingValue ? 'password' : type;
    });
    const [showValue, setShowValue] = useState(togglerShowingValue);

    const onBlury = () => {
        if (!value && onBlur) {
            setIsFocus(false);
            onBlur();
        }
    };

    const showValueHandler = () => {
        setShowValue(!showValue);
        setInputType(inputType === 'password' ? 'text' : type);
    };

    useEffect(() => {
        if (value) {
            setIsFocus(true);
        }
    }, [value]);

    const isShowPlaceholder = isFocus === true ? placeholder : '';

    return (
        <S.InputWrapper>
            <S.Label isFocus={isFocus}>{label}</S.Label>
            <S.Input
                autoComplete="off"
                isError={!!error}
                ref={ref}
                type={inputType}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocus(true)}
                onBlur={onBlury}
                placeholder={isShowPlaceholder}
                autoFocus={autoFocus}
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {isPassword && (
                <S.PasswordIcon isShowedValue={showValue}>
                    <IconButton onClick={showValueHandler} icon={<Eye />} />
                </S.PasswordIcon>
            )}
        </S.InputWrapper>
    );
});
