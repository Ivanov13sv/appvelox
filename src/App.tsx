import { useAuthState } from 'react-firebase-hooks/auth';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { ThemeProvider } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { useActions } from 'hooks/useActions';
import { Router } from 'Router';
import { NotificationProvider } from 'components/UI/Notification/NotificationProvider';
import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { auth } from './firebase';

function App() {
    const { logIn, logOut, cleanUser, closeDropdown } = useActions();
    //eslint-disable-next-line
    const [user, loading, error] = useAuthState(auth);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            logIn({
                email: user.email,
                id: user.uid,
                //@ts-ignore
                token: user.accessToken,
                avatar: user.photoURL as string,
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
            <NotificationProvider />
            <Router />
            <GlobalStyles />
        </ThemeProvider>
    );
}

export default App;
