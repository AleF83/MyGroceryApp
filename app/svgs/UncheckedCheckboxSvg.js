// @flow
import React from 'react';
import { Svg, Path } from 'react-native-svg';

import type { SvgPropsType } from './SvgTypes';

const UncheckedCheckboxSvg = (props: SvgPropsType): React.ComponentClass<SvgPropsType> =>
	<Svg width={props.width} height={props.height} viewBox="0 0 24 24">
		<Path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z"/>
	</Svg>;

export default UncheckedCheckboxSvg;