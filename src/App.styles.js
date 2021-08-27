import styled, { keyframes } from 'styled-components';

const weakGlow = (theme) => keyframes`
	0% {
		text-shadow: 0px 0px 0px ${theme.light};
	}
	50% {
		text-shadow: 0px 0px 4px ${theme.light};
	}
	100% {
		text-shadow: 0px 0px 0px ${theme.light};
	}
`;

const AppSty = styled.div`
	background-color: ${({ theme }) => theme.bgColor};
	color: ${({ theme }) => theme.blue4};
	display: flex;
	flex-direction: column;
	font-family: ${({ theme }) => theme.fontFamily};
	height: 100%;
	width: 100%;

	& #welcome-message {
		margin: auto 1rem;
		text-align: center;
		user-select: none;

		& h1 {
			font-size: 3em;
			text-transform: capitalize;
		}

		& strong {
			animation: ${({ theme }) => weakGlow(theme)} 3s infinite;
			animation-timing-function: ease;
			color: ${({ theme }) => theme.blue4};
			font-weight: normal;
			text-shadow: 0px 0px 0px ${({ theme }) => theme.blue3};
		}

		& #welcome-message__body {
			font-size: 1.5em;
		}

		& .transparent-text {
			color: ${({ theme }) => theme.bgColor};
			text-shadow: 0px 0px 11px ${({ theme }) => theme.light};
		}
	}
`;

export default AppSty;
