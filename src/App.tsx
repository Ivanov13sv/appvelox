import { ThemeProvider } from 'styled-components';
import { Router } from 'components/Router';
import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { LoginPage } from 'pages/LoginPage';

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			{/* <Router /> */}
			<LoginPage />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
