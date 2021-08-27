import { BubblesSty, BgBubbleSty } from './Bubbles.styles';

const Bubble = () => (
	<BubblesSty id="background-wrap">
		{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bubble) => (
			<BgBubbleSty key={`bubble ${bubble}`} className={`x${bubble}`} />
		))}
	</BubblesSty>
);
export default Bubble;
