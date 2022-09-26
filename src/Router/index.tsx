import { FC, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProfilePage } from 'pages/Profile';
import { RequireAuth } from 'hoc/RequireAuth';
import { RegistrationLayout } from 'pages/Registration';
import { Login } from 'pages/Login';
import { RegFirstStep } from 'pages/Registration/RegFirstStep';
import { RegSecondStep } from 'pages/Registration/RegSecondStep';
import { RegThirdStep } from 'pages/Registration/RegThirdStep';
import { RecoveryPage } from 'pages/Recovery';
import { DoctorsPage } from 'pages/Doctors';
import { DoctorDetailsPage } from 'pages/DoctorDetails';
import { UserInfoPage } from 'pages/UserInfo';
import { UserActivityPage } from 'pages/UserActivity';
import { Appointments } from 'pages/Appointments';

const LazyLoginLayout = lazy(() => import('components/LoginLayout'));
const LazyMainLayout = lazy(() => import('components/Layout'));

export const Router: FC = () => {
    return (
        <Routes>
            <Route element={<RequireAuth />}>
                <Route element={<LazyMainLayout />}>
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="profile/userInfo" element={<UserInfoPage />} />

                    <Route path="appointments" element={<Appointments />} />

                    <Route path="doctors" element={<DoctorsPage />}></Route>
                    <Route
                        path="doctors/:doctorId"
                        element={<DoctorDetailsPage />}
                    />
                    <Route path="userActivity" element={<UserActivityPage />} />
                    <Route path="test" element={<></>} />
                    <Route path="goodtoknow" element={<></>} />
                    <Route path="*" element={<Navigate to="profile" />} />
                </Route>
            </Route>
            <Route element={<LazyLoginLayout />}>
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
