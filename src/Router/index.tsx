import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { ProfilePage } from 'pages/ProfilePage';
import { AppointmentsPage } from 'pages/AppointmentsPage';
import { RequireAuth } from 'hoc/RequireAuth';
import { LoginLayout } from 'components/LoginLayout';
import { RegistrationLayout } from 'components/RegistrationLayout';
import { Login } from 'components/Login';
import { RegFirstStep } from 'components/RegistrationLayout/RegFirstStep';
import { RegSecondStep } from 'components/RegistrationLayout/RegSecondStep';
import { RegThirdStep } from 'components/RegistrationLayout/RegThirdStep';
import { RecoveryPage } from 'pages/RecoveryPage';
import { DoctorsPage } from 'pages/DoctorsPage';
import { DoctorDetailsPage } from 'pages/DoctorDetailsPage';
import { UserInfoPage } from 'pages/UserInfoPage';

export const Router: FC = () => {
    return (
        <Routes>
            <Route element={<RequireAuth />}>
                <Route element={<Layout />}>
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="profile/userInfo" element={<UserInfoPage />} />
                    <Route
                        path="profile/appointment"
                        element={<AppointmentsPage />}
                    />
                    <Route path="doctors" element={<DoctorsPage />}></Route>
                    <Route
                        path="doctors/:doctorId"
                        element={<DoctorDetailsPage />}
                    />
                    <Route path="messages" element={<></>} />
                    <Route path="test" element={<></>} />
                    <Route path="goodtoknow" element={<></>} />
                    <Route path="*" element={<Navigate to="profile" />} />
                </Route>
            </Route>
            <Route element={<LoginLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<RegistrationLayout />}>
                    <Route index element={<RegFirstStep />} />
                    <Route path="step2" element={<RegSecondStep />} />
                    <Route path="step3" element={<RegThirdStep />} />
                </Route>
                <Route path="/recovery" element={<RecoveryPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Route>
        </Routes>
    );
};
