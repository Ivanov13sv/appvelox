import styled, { ThemeProvider } from 'styled-components';
import Container from 'components/Container';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { Main } from 'components/Main';
import {MakingAppointmentPage} from 'pages/MakingAppointmentPage'

import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Wrapper>
				<Header />
				<Main>
					<MakingAppointmentPage />
				</Main>
				<Sidebar />
			</Wrapper>

			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;

const Wrapper = styled.div`
	/* background: ${({ theme }) => theme.color.main}; */
	/* display: flex;
	flex-direction: row-reverse; */
	grid-template-areas: "sidebar header" "sidebar main";
	grid-template-columns: 2fr 30fr;
    grid-template-rows: 1fr 30fr;
	height: 100%;
	display: grid;
`;
