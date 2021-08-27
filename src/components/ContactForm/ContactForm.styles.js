import styled from 'styled-components';

const ContactFormSty = styled.div`
	background-color: rgba(2, 3, 59, 0.582);
	display: none;
	flex-direction: column;
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 999;

	& #contact-form-container {
		border-radius: 20px;
		background-color: ${({ theme }) => theme.blue2};
		box-shadow: inset 0px 0px 10px 3px ${({ theme }) => theme.blue1};
		display: flex;
		flex-direction: column;
		margin: auto;
		max-width: 600px;
		position: relative;

		& form {
			margin: auto;
			position: relative;
			width: 80%;

			& #form-close-button {
				background-color: transparent;
				cursor: pointer;
				position: absolute;
				right: 0;
				top: 1rem;
				transition: all 0.2s ease;
				width: 10px;

				:hover {
					filter: drop-shadow(
						0px 0px 2px ${({ theme }) => theme.light}
					);
				}
			}

			& h2 {
				margin: 0.5rem 0;
				text-align: center;
				text-transform: capitalize;
			}

			& label,
			input,
			button,
			textarea {
				display: block;
			}

			& label {
				margin-bottom: 0.5rem;
				text-transform: capitalize;
				text-shadow: 0px 0px 5px ${({ theme }) => theme.shadow};
			}

			& input,
			textarea {
				background-color: ${({ theme }) => theme.bgColor};
				border-radius: 10px;
				color: ${({ theme }) => theme.blue4};
				margin: 0.5rem 0;
				outline: none;
				font-family: inherit;
				resize: none;
				border-style: none;
				padding: 0.5rem;
				text-shadow: 0px 0px 3px ${({ theme }) => theme.light};
				width: 100%;
			}

			& button {
				all: unset;
				background-color: ${({ theme }) => theme.bgColor};
				border-radius: 10px;
				color: ${({ theme }) => theme.blue4};
				cursor: pointer;
				padding: 0.5rem 0;
				text-align: center;
				text-transform: uppercase;
				transition: all 0.3s ease;
				width: 100%;

				:hover {
					text-shadow: 0px 0px 5px ${({ theme }) => theme.light};
				}
			}

			& #contact-form-status {
				color: ${({ statusMessage, theme }) => {
					switch (statusMessage) {
						case 'ok':
							return 'green';
						case 'err':
							return 'red';
						default:
							return theme.blue4;
					}
				}};
				margin: 0.4rem 0;
				text-align: center;
				transform: translateY(100%);
				transition: all 0.5s ease;
			}
		}
		& footer {
			background-color: ${({ theme }) => theme.blue2};
			border-radius: 30px;
			box-shadow: inset 0px 0px 10px 3px ${({ theme }) => theme.bgColor};
			padding: 0.5rem;
			text-align: center;
			transform: translateY(100%);
			font-size: 0.8em;
			width: 100%;

			& a {
				color: ${({ theme }) => theme.blue1};
				text-decoration: none;
				text-transform: lowercase;
				transition: text-shadow 0.2s ease;

				:hover {
					text-shadow: 0px 0px 2px ${({ theme }) => theme.light};
				}
			}
		}
	}
`;

export default ContactFormSty;
