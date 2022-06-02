import React from 'react';
import * as S from './style';

export const RegistrationStatus = () => {
	return (
		<S.Status>
			<S.Step>
				<S.StepNumber>
					{' '}
					<a>1</a>
				</S.StepNumber>
				<S.StepText>Данные для входа</S.StepText>
			</S.Step>
			<S.Step>
				<S.StepNumber>
					<a>2</a>
				</S.StepNumber>
				<S.StepText>Личная информация</S.StepText>
			</S.Step>
			<S.Step>
				<S.StepNumber>
					<a>3</a>
				</S.StepNumber>
				<S.StepText>Представители</S.StepText>
			</S.Step>
		</S.Status>
	);
};
