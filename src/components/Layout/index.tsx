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
import { useDisableScroll } from 'hooks/useDisableScroll';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const Layout = () => {
	const { successReg } = useAppSelector(state => state.successReg);
	const { isModalOpen } = useAppSelector(state => state.modal);
	const { id: userId } = useAppSelector(state => state.userAuth);
	const {
		hideSuccessReg,
		fetchCurrentUser,
		fetchAppointments,
		fetchDoctors,
		removeAllAppointments,
	} = useActions();

	useDisableScroll(isModalOpen);

	useEffect(() => {
		if (successReg) {
			setTimeout(() => {
				hideSuccessReg();
			}, 2700);
		}
	}, [successReg, hideSuccessReg]);

	useEffect(() => {
		fetchCurrentUser();
		fetchAppointments(userId as string);
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
				<Modal>
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
