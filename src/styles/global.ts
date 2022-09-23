import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

li{
	list-style: none;
}


#root{
	height: 100%;
}

body {
	font-family: 'Rubik', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: ${({ theme }) => theme.color.bg};;
	background-size: cover;
	color: ${({theme}) => theme.color.text};
	object-fit: cover;

}

body, html{
	height: 100%;
}
`;
