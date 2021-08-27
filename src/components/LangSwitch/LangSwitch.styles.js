import styled from 'styled-components';

const LangSwitchSty = styled.div`
	background-color: ${({ theme }) => theme.blue2};
	border-radius: 20px;
	box-shadow: inset 0px 0px 10px 3px ${({ theme }) => theme.bgColor};
	display: flex;
	padding: 0.7rem;
	position: fixed;
	right: 0.7rem;
	top: 0.7rem;

	& .flag-container {
		all: unset;
		cursor: pointer;
		height: 30px;
		margin-right: 0.7rem;
		width: 30px;

		:last-child {
			margin-right: 0rem;
		}
	}
`;

export default LangSwitchSty;
