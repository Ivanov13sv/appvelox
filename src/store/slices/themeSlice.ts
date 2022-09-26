import { createSlice } from '@reduxjs/toolkit';

interface IThemeSlice {
    theme: 'dark' | 'light';
}

const initialState: IThemeSlice = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
        setLightTheme: (state) => {
            state.theme = 'light';
        },
    },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
