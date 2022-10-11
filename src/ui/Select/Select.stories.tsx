import React from 'react';
import { IconApps } from '../Icon/Icon';
import IconText from '../IconText/IconText';
import Select from './Select'

export default {
	title: 'UI/Select',
	component: Select,
}

export const Default = () => (
	<Select>
		<IconText
			icon={<IconApps />}
			text="Ethereum"
		/>

		<IconText
			icon={<IconApps />}
			text="Ethereum"
		/>
	</Select>
);
export const Small = () => (
	<Select size='s'>
		<IconText
			icon={<IconApps />}
			text="Ethereum"
		/>

		<IconText
			icon={<IconApps />}
			text="Ethereum"
		/>
	</Select>
);