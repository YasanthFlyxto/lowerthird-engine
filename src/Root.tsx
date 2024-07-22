import { Composition } from 'remotion';
import { MyComposition, myCompSchema } from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<div className='text-white text-3xl text-center py-3' >Lowerthird Engine for Siyaneroo TV</div>
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
