import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './global/styles/Global.styles';
import AppSty from './App.styles';
import AppFn from './App.functions';
import Bubbles from './components/Bubbles/Bubbles';
import LangSwitch from './components/LangSwitch/LangSwitch';
import NavBar from './components/NavBar/NavBar';
import Skill from './components/Skill/Skill';
import ContactForm from './components/ContactForm/ContactForm';
import MyProjects from './components/MyProjects/MyProjects';

const App = () => {
	const { t, i18n } = useTranslation('global');
	const { mySkills } = AppFn();
	const contactFormRef = useRef();

	return (
		<ThemeProvider theme={theme}>
			<AppSty>
				<GlobalStyles />
				<Bubbles />
				<LangSwitch i18n={i18n} />
				<ContactForm contactFormRef={contactFormRef} t={t} />
				<NavBar contactFormRef={contactFormRef} />
				<div id="welcome-message">
					<h1 className="transparent-text">
						{t('welcomeMessage.h1.normal')}
						<strong>{t('welcomeMessage.h1.strong')}</strong>
					</h1>
					<p id="welcome-message__body" className="transparent-text">
						{t('welcomeMessage.p.normal')}
						<strong>{t('welcomeMessage.p.strong')}</strong>
					</p>
					{mySkills.map(({ name, icon }) => (
						<Skill key={name} skill={name} icon={icon} />
					))}
				</div>
				<MyProjects t={t} />
			</AppSty>
		</ThemeProvider>
	);
};

export default App;
