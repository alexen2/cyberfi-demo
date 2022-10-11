import React from 'react';
import { IconLogo } from '../../../ui/Icon/Icon';
import IdleAssetsItem from './IdleAssetsItem/IdleAssetsItem';
import IdleAssetsList from './IdleAssetsList'

export default {
	title: 'Components/IdleAssetsList',
	component: IdleAssetsList,
}

export const Default = () => (
	<IdleAssetsList>
		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>

		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>

		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>

		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>

		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>

		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>

		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>

		<IdleAssetsItem
			icon={<IconLogo />}
			asset="ASSET"
			value="999,999.999"
			value2="(~$999,999)"
		/>
	</IdleAssetsList>
);