import { FaGithub, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiRedux, SiTypescript } from 'react-icons/si';

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
			name: 'TypeScript',
			icon: <SiTypescript />,
		},
		{
			name: 'React.JS',
			icon: <FaReact />,
		},
		{
			name: 'Redux',
			icon: <SiRedux />,
		},
	];

	return { mySkills };
};

export default AppFn;
