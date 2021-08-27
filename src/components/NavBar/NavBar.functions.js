import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from 'react-icons/fa';

const NavBarFn = ({ t }) => {
	const nvItems = [
		{
			id: t('navbar.linkedin'),
			url: 'https://www.linkedin.com/in/gus-viana/',
			icon: <FaLinkedin />,
		},
		{
			id: t('navbar.github'),
			url: 'https://github.com/gusvianadev',
			icon: <FaGithub />,
		},
		{
			id: t('navbar.contact'),
			url: '',
			icon: <FaEnvelope />,
		},
		{
			id: t('navbar.resume.title'),
			url: t('navbar.resume.url'),
			icon: <FaUser />,
		},
	];

	return { nvItems };
};

export default NavBarFn;
