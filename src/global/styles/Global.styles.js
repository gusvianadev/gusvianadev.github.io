import { createGlobalStyle } from 'styled-components';

export const theme = {
	fontFamily: "'Fredoka One', cursive",
	shadow: '#000000',
	bgColor: '#03002e',
	blue1: '#011569',
	blue2: '#213cb4',
	blue2__transparent: 'rgba(33, 60, 180, 0.6)',
	blue3: '#2746ce',
	blue4: '#8ebadf',
	light: '#8f8bce',
};
export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin: 0;
		overflow: hidden;
        padding: 0;
    }

    *, 
    *:before, 
    *:after {
        box-sizing: inherit;
    }

    body,
    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	img {
		width: 100%;
		height: auto;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill::first-line,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		border: 0;
		-webkit-box-shadow: 0 0 0 1000px ${() => theme.bgColor} inset !important;
		box-shadow: 0 0 0 1000px ${() => theme.bgColor} inset !important;
		-webkit-text-fill-color: ${() => theme.blue4} !important;
		font-family: ${() => theme.fontFamily};
}
`;
