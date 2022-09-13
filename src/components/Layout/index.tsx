import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { Main } from 'components/Main';
import { MakeAnAppointment } from 'components/MakeAnAppointment';
import styled from 'styled-components';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import { SuccessScreen } from 'components/RegistrationLayout/SuccessScreen';
import { Modal } from 'components/UI/Modal';

export const Layout = () => {
    const { successReg } = useAppSelector((state) => state.successReg);
    const { isModalOpen } = useAppSelector((state) => state.modal);

    const {
        authInfo: { id: userId },
    } = useAppSelector((state) => state.authInfo);
    const {
        hideSuccessReg,
        fetchCurrentUser,
        fetchAppointments,
        fetchDoctors,
        removeAllAppointments,
        fetchUserActivity,
    } = useActions();

    useEffect(() => {
        if (successReg) {
            const timerId = setTimeout(() => {
                hideSuccessReg();
            }, 2700);
            return () => clearTimeout(timerId);
        }
    }, [successReg, hideSuccessReg]);

    useEffect(() => {
        fetchCurrentUser();
        fetchAppointments();
        fetchUserActivity();
        fetchDoctors();
        return () => {
            removeAllAppointments();
        };
        //eslint-disable-next-line
    }, [userId]);

    if (successReg) {
        return <SuccessScreen />;
    }

    return (
        <Wrapper>
            <Header />
            {isModalOpen && (
                <Modal isOpen={isModalOpen}>
                    <MakeAnAppointment />
                </Modal>
            )}

            <Main>
                <Outlet />
            </Main>
            <Sidebar />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'side header'
        'side main';
    grid-template-columns: 190px 1fr;
    grid-template-rows: 55px 1fr;
    height: 100%;
`;
