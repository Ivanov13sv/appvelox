import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'components/UI/Button';
import { Checkbox } from 'components/UI/Checkbox';
import { Input } from 'components/UI/Input';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import { useAppSelector } from 'hooks/useAppSelector';
import { getMaskedPhone } from 'utils/phoneMask';
import { checkPasswordMatch } from 'utils/checkPasswordMatch';
import * as S from './style';

interface LocationState {
    state: {
        error: string;
    };
}

export const RegFirstStep = () => {
    const { user } = useAppSelector((state) => state.regFields);
    const { setLoginInfo } = useActions();
    const navigate = useNavigate();
    const { state } = useLocation() as LocationState;

    const email = useInput(user?.email, { isEmpty: true, isEmail: true });
    const phone = useInput(user?.phone, { isEmpty: true, isPhone: true });
    const { onChange, ...pass } = useInput(user?.password, {
        isEmpty: true,
        isPassword: true,
    });
    const repeatPass = useInput(user?.password, { repeatPassword: true });
    const [agreements, setAgreements] = useState({
        isChecked: false,
        showError: false,
    });
    const test = useInput('', { isEmpty: true });
    const [validForm, setValidForm] = useState(false);

    const checkedPass = checkPasswordMatch(pass.value, repeatPass.value);

    useMemo(() => {
        if (state?.error) {
            setTimeout(() => {
                state.error = '';
            }, 2000);
        }
    }, [state]);

    useEffect(() => {
        if (checkedPass) {
            repeatPass.errorMessage = '';
        }
    }, [checkedPass, repeatPass]);

    useEffect(() => {
        if (
            email.errorMessage ||
            phone.errorMessage ||
            pass.errorMessage ||
            repeatPass.errorMessage ||
            checkedPass === false ||
            agreements.isChecked === false
        ) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [
        email.errorMessage,
        phone.errorMessage,
        pass.errorMessage,
        repeatPass.errorMessage,
        checkedPass,
        agreements,
    ]);

    const showRequiredFields = () => {
        email.setDirty(true);
        phone.setDirty(true);
        pass.setDirty(true);
        repeatPass.setDirty(true);
        setAgreements({ ...agreements, showError: true });
    };

    const setData = () => {
        if (validForm) {
            setLoginInfo({
                email: email.value,
                password: pass.value,
                phone: phone.value,
            });
            navigate('step2');
        } else {
            showRequiredFields();
        }
    };

    return (
        <>
            <Input
                {...email}
                error={
                    email.isDirty && !state?.error
                        ? email.errorMessage
                        : state?.error
                }
                label="Почта"
                type="text"
            />

            <Input
                value={phone.value}
                placeholder="+7 (999) 999-99-99"
                onBlur={phone.onBlur}
                onChange={(e) => getMaskedPhone(e, phone.setValue)}
                error={phone.isDirty ? phone.errorMessage : ''}
                label="Телефон"
                type="tel"
            />

            <Input
                onChange={(e) =>
                    pass.setValue(e.target.value.replace(/\s/, ''))
                }
                {...pass}
                error={pass.isDirty ? pass.errorMessage : ''}
                label="Пароль"
            />
            <Input
                {...repeatPass}
                error={
                    repeatPass.isDirty && checkedPass === false
                        ? repeatPass.errorMessage
                        : ''
                }
                label="Повторите пароль"
            />
            <S.StepAgreements>
                <div>
                    <Checkbox
                        error={!agreements.isChecked && agreements.showError}
                        checked={agreements.isChecked}
                        onChange={() =>
                            setAgreements({
                                ...agreements,
                                isChecked: !agreements.isChecked,
                            })
                        }
                    />
                    <span>Я согласен на:</span>
                </div>
                <li>
                    <NavLink to="#">
                        Обработку персональных данных (ФЗ 152)
                    </NavLink>
                </li>
                <li>Передачу персональных данных третьим лицам</li>
                <li>Обращение для информирования и напоминания</li>
            </S.StepAgreements>
            <Button type="button" onClick={setData}>
                Далее
            </Button>
        </>
    );
};
