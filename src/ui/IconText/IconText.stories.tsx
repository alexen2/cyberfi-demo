import React from 'react';
import { IconEthereum, IconLogoW } from '../Icon/Icon';
import IconText from './IconText'

export default {
	title: 'UI/IconText',
	component: IconText,
}

export const Default = () => (
	<IconText
		icon={<IconLogoW />}
		text="Warlock"
	/>
);
export const Img = () => (
	<IconText
		icon={<IconEthereum />}
		text="Ethereum"
		img
	/>
);
export const SizeBadge = () => (
	<IconText
		icon={<IconLogoW />}
		text="Warlock"
		size='badge'
	/>
);