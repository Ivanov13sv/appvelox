import React from 'react';
import { RegistrationLayout } from 'components/RegistrationLayout';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RegistrationStepOne } from 'components/Registration/RegistrationStepOne';
import { RegistrationStepTwo } from 'components/Registration/RegistrationStepTwo';
import { RegistrationStepThree } from 'components/Registration/RegistrationStepThree';
import { SuccessRegistration } from 'components/Registration/SuccessRegistration';

export const Ragistration = () => {
	return (
		<Routes>
			<Route path='' element={<RegistrationStepOne />} />
			<Route path="step2" element={<RegistrationStepTwo />} />
			<Route path="step3" element={<RegistrationStepThree />} />
		</Routes>
	);
};
