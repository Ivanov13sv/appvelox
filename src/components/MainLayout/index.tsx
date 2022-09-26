import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { Main } from 'components/Main';
import { MakeAnAppointment } from 'components/CreateAppointment';
import styled from 'styled-components';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import { SuccessScreen } from 'pages/Registration/SuccessScreen';
import { Modal } from 'components/UI/Modal';

const MainLayout = () => {
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
            return () => {
                clearTimeout(timerId);
            };
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
    height: 100%;
    display: flex;
    flex-direction: column;
    @media ${({ theme }) => theme.media.desktop} {
        display: grid;
        grid-template-areas:
            'side header'
            'side main';
        grid-template-columns: 190px 1fr;
        grid-template-rows: 55px 1fr;
    }
`;

export default MainLayout;
