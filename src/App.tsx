import styled, { ThemeProvider } from 'styled-components';
import Container from 'components/Container';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';

import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Wrapper>
				<Header />
				<Sidebar />
			</Wrapper>

			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;

const Wrapper = styled.div`
	/* background: ${({ theme }) => theme.color.main}; */
	display: flex;
	flex-direction: row-reverse;
	height: 100%;
`;
