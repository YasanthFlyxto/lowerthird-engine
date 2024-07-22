import { Composition } from 'remotion';
import { MyComposition, myCompSchema } from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={500}
				fps={30}
				width={1920}
				height={1080}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Type Main Title Here',
					subtitleText: 'Type Subtitle',
					titleColor: '#000000',
					logoColor: '#00bfff',

				}}
			/>
		</>
	);
};
