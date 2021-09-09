import { FaReact } from 'react-icons/fa';
import { SiStyledComponents, SiRedux } from 'react-icons/si';
import screenshotPortfolio from './media/img/screenshot-portfolio.jpg';
import screenshotPokedex from './media/img/screenshot-pokedex.jpg';
import screenshotCalculator from './media/img/screenshot-calculator.jpg';
import screenshotDrumMachine from './media/img/screenshot-drum-machine.jpg';
import screenshotMarkdownPreviewer from './media/img/screenshot-markdown-previewer.jpg';
import screenshotRandomQuoteMachine from './media/img/screenshot-random-quote-machine.jpg';
import screenshotBreakClock from './media/img/screenshot-break-clock.jpg';

const projects = [
	{
		id: 'portfolio',
		screenshot: (
			<img src={screenshotPortfolio} alt="portfolio screenshot" />
		),
		url: 'https://gusvianadev.github.io/',
		source: 'https://github.com/gusvianadev/gusvianadev.github.io',
		usedTech: [
			{
				id: 'React.JS',
				icon: <FaReact />,
			},
			{
				id: 'Styled Components',
				icon: <SiStyledComponents />,
			},
		],
	},
	{
		id: 'pokedex',
		screenshot: <img src={screenshotPokedex} alt="pokédex screenshot" />,
		url: 'https://gusvianadev.github.io/pokedex/',
		source: 'https://github.com/gusvianadev/pokedex/',
		usedTech: [
			{
				id: 'React.JS',
				icon: <FaReact />,
			},
			{
				id: 'Styled Components',
				icon: <SiStyledComponents />,
			},
			{
				id: 'Redux',
				icon: <SiRedux />,
			},
		],
	},
	{
		id: 'calculator',
		screenshot: (
			<img src={screenshotCalculator} alt="calculator screenshot" />
		),
		url: 'https://gusvianadev.github.io/fcc-calculator/',
		source: 'https://github.com/gusvianadev/fcc-calculator/',
		usedTech: [
			{
				id: 'React.JS',
				icon: <FaReact />,
			},
			{
				id: 'Styled Components',
				icon: <SiStyledComponents />,
			},
		],
	},
	{
		id: 'drumMachine',
		screenshot: (
			<img src={screenshotDrumMachine} alt="drum machine screenshot" />
		),
		url: 'https://gusvianadev.github.io/fcc-drum-machine/',
		source: 'https://github.com/gusvianadev/fcc-drum-machine/',
		usedTech: [
			{
				id: 'React.JS',
				icon: <FaReact />,
			},
			{
				id: 'Styled Components',
				icon: <SiStyledComponents />,
			},
		],
	},
	{
		id: 'markdownPreviewer',
		screenshot: (
			<img
				src={screenshotMarkdownPreviewer}
				alt="markdown previewer screenshot"
			/>
		),
		url: 'https://gusvianadev.github.io/fcc-markdown-previewer/',
		source: 'https://github.com/gusvianadev/fcc-markdown-previewer/',
		usedTech: [
			{
				id: 'React.JS',
				icon: <FaReact />,
			},
			{
				id: 'Styled Components',
				icon: <SiStyledComponents />,
			},
		],
	},
	{
		id: 'randomQuoteMachine',
		screenshot: (
			<img
				src={screenshotRandomQuoteMachine}
				alt="random quote machine screenshot"
			/>
		),
		url: 'https://gusvianadev.github.io/fcc-random-quote-machine/',
		source: 'https://github.com/gusvianadev/fcc-random-quote-machine/',
		usedTech: [
			{
				id: 'React.JS',
				icon: <FaReact />,
			},
			{
				id: 'Styled Components',
				icon: <SiStyledComponents />,
			},
		],
	},
	{
		id: 'breakClock',
		screenshot: (
			<img src={screenshotBreakClock} alt="25 + 5 clock screenshot" />
		),
		url: 'https://gusvianadev.github.io/fcc-break-clock/',
		source: 'https://github.com/gusvianadev/fcc-break-clock',
		usedTech: [
			{
				id: 'React.JS',
				icon: <FaReact />,
			},
			{
				id: 'Styled Components',
				icon: <SiStyledComponents />,
			},
		],
	},
];

export default projects;
