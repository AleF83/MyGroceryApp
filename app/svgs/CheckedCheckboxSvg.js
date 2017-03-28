// @flow
import React from 'react';
import { Svg, Path } from 'react-native-svg';

import type { SvgPropsType } from './SvgTypes';

const CheckedCheckboxSvg = (props: SvgPropsType): React.ComponentClass<SvgPropsType> =>
	<Svg width={props.width} height={props.height} viewBox="0 0 24 24">
		<Path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.312-9.688l.515 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm12.52 3.317v6.594h-16v-16h15.141c.846-.683 1.734-1.341 2.691-2h-19.832v20h20v-11.509c-.656.888-1.318 1.854-2 2.915z"/>
	</Svg>;

export default CheckedCheckboxSvg;