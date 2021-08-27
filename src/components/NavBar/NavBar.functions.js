import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from 'react-icons/fa';

const NavBarFn = () => {
	const nvItems = [
		{
			id: 'LinkedIn',
			url: 'https://www.linkedin.com/in/gus-viana/',
			icon: <FaLinkedin />,
		},
		{
			id: 'Github',
			url: 'https://github.com/gusvianadev',
			icon: <FaGithub />,
		},
		{
			id: 'contact',
			url: '',
			icon: <FaEnvelope />,
		},
		{
			id: 'resume',
			url: 'https://docs.google.com/document/d/1rOHUFKqhQyVGQyd1E7BA58aIcfzfOMfvJkmXuw-yW8g/edit',
			icon: <FaUser />,
		},
	];

	return { nvItems };
};

export default NavBarFn;
