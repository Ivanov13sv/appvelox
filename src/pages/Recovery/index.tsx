import { Button } from 'components/UI/Button';
import  { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RecoveryInput } from 'components/UI/RecoveryInput';
import * as S from './style';

export const RecoveryPage = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [thirdNumber, setThirdNumber] = useState('');
    const [fourthNumber, setFourthNumber] = useState('');
    const [fifthNumber, setFifthNumber] = useState('');
    const [sixthNumber, setSixthNumber] = useState('');

    const code = [
        firstNumber,
        secondNumber,
        thirdNumber,
        fourthNumber,
        fifthNumber,
        sixthNumber,
    ];
    const handlers = [
        setFirstNumber,
        setSecondNumber,
        setThirdNumber,
        setFourthNumber,
        setFifthNumber,
        setSixthNumber,
    ];

    const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const regEx = /\D/g;
        const newValue = e.target.value.replace(regEx, '');
        handlers[index](newValue.slice(0, 1));
    };

    return (
        <S.Recovery>
            <div style={{ padding: ' 1rem 0', color: 'red' }}>
                Приносим извинения, данная страница находится в разработке
            </div>
            <h2>Ввостановление пароля</h2>
            <span>На ваш номер выслан код восстановления</span>
            <form>
                <div>
                    {code.map((item, key) => (
                        <RecoveryInput
                            key={key}
                            value={item}
                            onChange={(e) => onChange(e, key)}
                        />
                    ))}
                </div>
                <span>Повторить s отправку через 00:15</span>
                <Button>Далее</Button>
                <NavLink to="#">Другой способ восстановления</NavLink>
            </form>
        </S.Recovery>
    );
};
