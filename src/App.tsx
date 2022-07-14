import { useAuthState } from 'react-firebase-hooks/auth';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { ThemeProvider } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { useActions } from 'hooks/useActions';
import { Router } from 'components/Router';
import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { auth } from './firebase';
import { Notice } from 'components/UI/Notice';

function App() {
	const { logIn, logOut, cleanUser, closeDropdown } = useActions();
	const [user, loading, error] = useAuthState(auth);

	onAuthStateChanged(auth, user => {
		if (user) {
			logIn({
				email: user.email,
				id: user.uid,
				//@ts-ignore
				token: user.accessToken,
			});
		} else {
			cleanUser();
			logOut();
			closeDropdown();
		}
	});

	if (loading) return <FullscreenSpiner />;

	return (
		<ThemeProvider theme={myTheme}>
			<Notice timer={3000} />

			<Router />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
