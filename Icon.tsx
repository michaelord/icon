import {getModifiers} from 'components/libs';
import {Size} from 'components/types';
import React, {memo} from 'react';
import './Icon.scss';

import * as Types from 'components/types';

type Style = 'inherit';

export type IconProps = {
	size?: Size;
	style?: Style;
	icon: Types.Children;
};

export const Icon = memo((props: IconProps) => {
	const base: string = 'icon';
	const {icon, style = 'inherit', size = 'full'} = props;
	const I = (icon as React.ReactType) || null;

	const atts = {
		className: getModifiers(base, {
			style,
			size,
		}),
	};

	return <I {...atts} aria-hidden={true} />;
});
