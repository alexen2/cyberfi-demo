import React from 'react';
import IdleAssetsItem from './IdleAssetsItem'
import { IconLogo } from '../../../../ui/Icon/Icon';

export default {
	title: 'Components/IdleAssetsItem',
	component: IdleAssetsItem,
}

export const Default = () => (
	<IdleAssetsItem
		icon={<IconLogo />}
		asset="ASSET"
		value="999,999.999"
		value2="(~$999,999)"
	/>
);