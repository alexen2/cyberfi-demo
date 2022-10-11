import React from 'react';
import { IconApps } from '../../../../ui/Icon/Icon';
import SidebarMenuItem from './SidebarMenuItem'

export default {
	title: 'Components/SidebarMenuItem',
	component: SidebarMenuItem,
}

export const Default = () => (
	<SidebarMenuItem
		icon={<IconApps />}
		text="Tab name"
	/>
);
export const Active = () => (
	<SidebarMenuItem
		icon={<IconApps />}
		text="Tab name"
		active
	/>
);