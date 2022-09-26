import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInput } from 'hooks/useInput';
import { useEffect, useState } from 'react';
import { getMaskedPhone } from 'utils/phoneMask';
import * as S from './style';

export const RegThirdStep = () => {
    const {
        user: { representativeInfo },
    } = useAppSelector((state) => state.regFields);
    const lastName = useInput(representativeInfo?.lastName, { isEmpty: true });
    const firstName = useInput(representativeInfo?.firstName, {
        isEmpty: true,
    });
    const patronymic = useInput(representativeInfo?.patronymic, {
        isEmpty: true,
    });
    const phone = useInput(representativeInfo?.phone, { isEmpty: true, isPhone: true });
    const { setRepresentativeInfo } = useActions();

    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        if (
            lastName.errorMessage ||
            firstName.errorMessage ||
            patronymic.errorMessage ||
            phone.errorMessage
        ) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [
        lastName.errorMessage,
        firstName.errorMessage,
        patronymic.errorMessage,
        phone.errorMessage,
    ]);

    const setData = () => {
        if (validForm) {
            setRepresentativeInfo({
                lastName: lastName.value,
                firstName: firstName.value,
                patronymic: patronymic.value,
                phone: phone.value,
            });
        } else {
            showRequiredFields();
        }
    };

    const showRequiredFields = () => {
        lastName.setDirty(true);
        firstName.setDirty(true);
        patronymic.setDirty(true);
        phone.setDirty(true);
    };

    return (
        <>
            <S.Description>
                Укажите данные вашего представителя (например, член семьи) или
                иного лица для экстренного информирования
            </S.Description>
            <Input
                {...lastName}
                error={lastName.isDirty ? lastName.errorMessage : ''}
                label="Фамилия"
            />
            <Input
                {...firstName}
                error={firstName.isDirty ? firstName.errorMessage : ''}
                label="Имя"
            />
            <Input
                {...patronymic}
                error={patronymic.isDirty ? patronymic.errorMessage : ''}
                label="Отчество"
            />
            <Input
                label="Телефон"
                value={phone.value}
                placeholder="+7 (999) 999-99-99"
                onBlur={phone.onBlur}
                onChange={(e) => getMaskedPhone(e, phone.setValue)}
                error={phone.isDirty ? phone.errorMessage : ''}
                type="tel"
            />
            <Button type={validForm ? 'submit' : 'button'} onClick={setData}>
                Зарегистрироваться
            </Button>
        </>
    );
};
