import styled from 'styled-components';

const MyProjectsSty = styled.div`
	background-color: ${({ theme }) => theme.blue2};
	border-radius: 20px;
	box-shadow: inset 0px 0px 10px 3px ${({ theme }) => theme.bgColor};
	display: flex;
	flex-direction: column;
	height: 80vh;
	left: 50%;
	position: absolute;
	top: ${({ isShowing }) => (isShowing ? '50%' : '140%')};
	transform: translate(-50%, -50%);
	transition: top 0.5s ease;
	width: 100%;

	@media (min-width: 425px) {
		width: 80vw;
	}

	& button {
		all: unset;
		background-color: ${({ theme }) => theme.blue2};
		border-radius: 20px 20px 0 0;
		box-shadow: inset 0px 0px 10px 3px ${({ theme }) => theme.bgColor};
		color: inherit;
		cursor: pointer;
		font-weight: bold;
		margin: 0 auto;
		padding: 1rem 0rem;
		text-align: center;
		text-transform: capitalize;
		transform: translateY(-100%);
		transition: text-shadow 0.2s ease;
		user-select: none;
		width: 135px;

		:hover {
			text-shadow: 0px 0px 2px ${({ theme }) => theme.light};
		}
	}

	& #projects-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: 0 auto;
		overflow-y: auto;
		overflow-x: hidden;
		transform: translateY(-5%);
		width: 80%;

		& .project-card {
			background-color: ${({ theme }) => theme.blue1};
			border-radius: 10px;
			height: 450px;
			margin: 1rem 0rem;
			padding: 0rem 0.5rem;
			transition: all 0.5s ease;
			width: 260px;

			:hover {
				box-shadow: 0px 0px 10px 3px ${({ theme }) => theme.light};
			}

			> * {
				margin: 0.5rem 0rem;
			}

			& h3 {
				text-align: center;
				text-transform: capitalize;
			}

			& .technologies-used {
				display: flex;
				justify-content: space-around;

				& svg {
					font-size: 1.5em;
					transition: filter 0.2s ease;
				}

				& svg:hover {
					filter: drop-shadow(
						0px 0px 2px ${({ theme }) => theme.light}
					);
				}

				& .tooltip {
					display: inline-block;
					position: relative;
				}

				& .tooltip .tooltiptext {
					background-color: ${({ theme }) => theme.blue2};
					border-radius: 6px;
					box-shadow: inset 0px 0px 10px 3px
						${({ theme }) => theme.bgColor};
					bottom: 125%;
					color: ${({ theme }) => theme.blue4};
					left: 50%;
					margin-left: -60px;
					opacity: 0;
					padding: 5px 0;
					position: absolute;
					text-align: center;
					text-shadow: 0px 0px 11px ${({ theme }) => theme.light};
					transition: opacity 0.2s;
					visibility: hidden;
					width: 120px;
					z-index: 1;
				}

				& .tooltip .tooltiptext::after {
					border-color: ${({ theme }) => theme.blue2} transparent
						transparent transparent;
					border-style: solid;
					border-width: 5px;
					content: '';
					left: 50%;
					margin-left: -5px;
					position: absolute;
					top: 100%;
				}

				& .tooltip:hover .tooltiptext {
					opacity: 1;
					visibility: visible;
				}
			}

			& .project-links {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				& a {
					color: inherit;
					display: block;
					text-decoration: none;
					text-transform: capitalize;
					transition: text-shadow 0.2s ease;

					& svg {
						margin-right: 0.3rem;
						transition: filter 0.2s ease;
					}

					:hover {
						text-shadow: 0px 0px 11px ${({ theme }) => theme.light};

						& svg {
							filter: drop-shadow(
								0px 0px 2px ${({ theme }) => theme.light}
							);
						}
					}
				}
			}
		}
	}
`;

export default MyProjectsSty;
