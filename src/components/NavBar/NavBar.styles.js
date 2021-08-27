import styled from 'styled-components';

const NavBarSty = styled.nav`
	position: absolute;
	left: 0%;
	top: 50%;
	transform: translateY(-50%);
	user-select: none;

	& ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
		text-transform: uppercase;
	}
	& li {
		background-color: ${({ theme }) => theme.blue2__transparent};
		box-shadow: inset 0px 0px 10px 3px ${({ theme }) => theme.bgColor};
		cursor: pointer;
		margin: 2rem 0rem;
		padding: 0.5rem 0rem 0.5rem 0.5rem;
		transform: translateX(-85%);
		transition: transform 0.5s ease;
		width: 120px;

		:hover {
			-webkit-backface-visibility: hidden;
			-webkit-transform: translate3d(0, 0, 0);
			-webkit-perspective: 1000;
		}

		& .navbar-item {
			color: inherit;
			display: flex;
			justify-content: space-between;
			text-decoration: none;
			position: relative;

			& .navbar-bubble {
				background: radial-gradient(
					circle at 50% 55%,
					rgba(163, 185, 230, 0.5),
					rgba(104, 145, 228, 0.486) 40%,
					rgba(53, 116, 199, 0.493) 60%,
					rgba(43, 93, 255, 0.144)
				);
				border-radius: 100%;
				-webkit-box-shadow: inset 0px 0px 39px -3px ${({ theme }) => theme.blue1},
					4px 12px 13px -3px ${({ theme }) => theme.shadow};
				box-shadow: inset 0px 0px 39px -3px ${({ theme }) => theme.blue1},
					4px 12px 13px -3px ${({ theme }) => theme.shadow};
				display: block;
				height: 50px;
				position: absolute;
				right: -30%;
				top: 50%;
				transform: translateY(-50%);
				width: 50px;

				:before {
					content: '';
					display: block;
					padding-top: 100%;
				}

				:after {
					content: '';
					position: absolute;
					top: 3%;
					left: 2%;
					width: 100%;
					height: 100%;
					border-radius: 100%;
					filter: blur(1px);
					-webkit-filter: blur(1px);
					z-index: 1;
					transform: rotateZ(-30deg);
					-webkit-transform: rotateZ(-30deg);
					display: block;
					background: radial-gradient(
						circle at 50% 80%,
						rgba(255, 255, 255, 0),
						rgba(255, 255, 255, 0) 74%,
						rgb(15, 58, 124) 80%,
						rgb(22, 68, 121) 84%,
						rgba(255, 255, 255, 0) 100%
					);
				}
				& svg {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-size: 1.5em;
				}
			}
		}
	}
`;

export default NavBarSty;
