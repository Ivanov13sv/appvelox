import { ThemeProvider } from 'styled-components';
import { Router } from 'components/Router';

import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Router />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;	
