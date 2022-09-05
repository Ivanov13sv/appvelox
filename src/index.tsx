import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './firebase';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <App />
                </PersistGate>
            </Provider>
        </React.StrictMode>
    </HashRouter>
);
