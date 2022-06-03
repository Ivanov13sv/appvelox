import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as S from './style';

export const RegistrationStatus = () => {
	const [step, setStep] = useState(1);

	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/registration':
				setStep(1);
				break;
			case '/registration/step2':
				setStep(2);
				break;
			case '/registration/step3':
				setStep(3);
				break;
		}
	}, [location.pathname]);

	return (
		<S.Status>
			<S.Step active={step === 1} done={step > 1}>
				<S.StepNumber active={step === 1} done={step > 1}>
					<NavLink to={'/registration'}>1</NavLink>
				</S.StepNumber>
				<span>Данные для входа</span>
			</S.Step>
			<S.Step active={step === 2} done={step > 2}>
				<S.StepNumber active={step === 2} done={step > 2}>
					<NavLink to="/registration/step2">2</NavLink>
				</S.StepNumber>
				<span>Личная информация</span>
			</S.Step>
			<S.Step active={step === 3} done={step > 3}>
				<S.StepNumber active={step === 3} done={step > 3}>
					<NavLink to="/registration/step3">3</NavLink>
				</S.StepNumber>
				<span>Представители</span>
			</S.Step>
		</S.Status>
	);
};
