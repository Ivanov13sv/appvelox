import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { Main } from 'components/Main';
import styled from 'styled-components';
import { MakingAppointmentPage } from 'pages/MakingAppointmentPage';

export const Layout = () => {
	return (
		<Wrapper>
			<Header />
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
