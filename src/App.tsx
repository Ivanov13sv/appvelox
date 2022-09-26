import { useAuthState } from 'react-firebase-hooks/auth';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { ThemeProvider } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { useActions } from 'hooks/useActions';
import { Router } from 'Router';
import { NotificationProvider } from 'components/UI/Notification/NotificationProvider';
import { useAppSelector } from 'hooks/useAppSelector';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';
import { auth } from './firebase';

function App() {
    const { logIn, logOut, cleanUser } = useActions();
    //eslint-disable-next-line
    const [user, loading, error] = useAuthState(auth);
    const { theme } = useAppSelector((state) => state.theme);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            logIn({
                email: user.email,
                id: user.uid,
                // @ts-ignore
                token: user.accessToken,
                avatar: user.photoURL as string,
            });
        } else {
            cleanUser();
            logOut();
        }
    });


    const themeMode = theme === 'dark' ? darkTheme : lightTheme;

    if (loading) return <FullscreenSpiner />;

    return (
        <ThemeProvider theme={themeMode}>
            <NotificationProvider />
            <Router />
            <GlobalStyles />
        </ThemeProvider>
    );
}

export default App;
