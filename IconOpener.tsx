import {getModifiers} from 'components/libs';
import {Size} from 'components/types';
import React, {memo} from 'react';
import './IconOpener.scss';

import * as Types from 'components/types';

type Props = {
	size?: Size;
	className?: string;
};

export const IconOpener = memo((props: Props) => {
	const base: string = 'icon';
	//	const { size = 'full'} = props;
	const {className} = props;

	const atts = {
		className:
			getModifiers(base, {
				toggle: true,
				//size,
			}) + `${className ? ` ${className}` : ''}`,
		'aria-hidden': true,
	};

	return (
		<span {...atts}>
			<i></i>
		</span>
	);
});
