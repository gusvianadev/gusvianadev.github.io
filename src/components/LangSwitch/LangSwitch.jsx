import LangSwitchSty from './LangSwitch.styles';
import langEnFlag from './media/img/en.svg';
import langEsFlag from './media/img/es.svg';

const LangSwitch = ({ i18n }) => {
	const languages = [
		{
			id: 'en',
			flag: langEnFlag,
		},
		{
			id: 'es',
			flag: langEsFlag,
		},
	];

	return (
		<LangSwitchSty>
			{languages.map(({ id, flag }) => (
				<button
					type="button"
					key={id}
					className="flag-container"
					onClick={() => i18n.changeLanguage(id)}
				>
					<img src={flag} alt={`lang flag for ${id}`} />
				</button>
			))}
		</LangSwitchSty>
	);
};

export default LangSwitch;
