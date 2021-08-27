import { FaGithub, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiStyledComponents, SiRedux } from 'react-icons/si';

const AppFn = () => {
	const mySkills = [
		{
			name: 'Git',
			icon: <FaGithub />,
		},
		{
			name: 'HTML',
			icon: <FaHtml5 />,
		},
		{
			name: 'CSS',
			icon: <FaCss3 />,
		},
		{
			name: 'JavaScript',
			icon: <FaJs />,
		},
		{
			name: 'React.JS',
			icon: <FaReact />,
		},
		{
			name: 'Styled Components',
			icon: <SiStyledComponents />,
		},
		{
			name: 'Redux Toolkit',
			icon: <SiRedux />,
		},
	];

	return { mySkills };
};

export default AppFn;
