import { AbsoluteFill } from 'remotion';
;
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import LowerThird from './LowerThird';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<div>
			<LowerThird/>
		</div>
	);
};
