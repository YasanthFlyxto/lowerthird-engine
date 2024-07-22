import { AbsoluteFill } from 'remotion';
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import { z, ZodObject } from 'zod';
import { zColor } from '@remotion/zod-types';
import LowerThird from './LowerThird';
import { BackgroundAnimation } from './BackgroundAnimation';
import { RibbonAnimation } from './RibbonAnimation';



export const myCompSchema = z.object({
	titleText: z.string(),
	subtitleText: z.string(),
	logoURL: z.string(),
	titleColor: zColor(),
	subtitleColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,

	subtitleText: propFour,
	subtitleColor: propFive,
	logoURL: propSix,
}) => {

	return (
		<div >
			<LowerThird
				titleText={propOne}
				subtitleText={propFour}
				subtitleColor={propFive}
				titleColor={propTwo}
				logoURL={propSix}
			/>

		</div>
	);
};
