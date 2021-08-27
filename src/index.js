import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import langEn from './global/lang/en/global.json';
import langEs from './global/lang/es/global.json';

i18next.init({
	interpolation: { escapeValue: false },
	lng: (navigator.language || navigator.userLanguage).slice(0, 2),
	resources: {
		en: {
			global: langEn,
		},
		es: {
			global: langEs,
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
