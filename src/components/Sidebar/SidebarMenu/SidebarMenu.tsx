import React from 'react';
import { IconBarChart, IconLogoW, IconPieChart, IconShowChart, IconStorage, IconSwapHoriz } from '../../../ui/Icon/Icon';
import './sidebar-menu.scss';
import SidebarMenuItem from './SidebarMenuItem/SidebarMenuItem';

const SidebarMenu: React.FC = () => {
	return (
		<div className="sidebar-menu">
			<SidebarMenuItem
				icon={<IconShowChart />}
				text="Dashboard"				
			/>

			<SidebarMenuItem
				icon={<IconBarChart />}
				text="Trade"
				active
			/>

			<SidebarMenuItem
				icon={<IconSwapHoriz />}
				text="Swap"
			/>

			<SidebarMenuItem
				icon={<IconStorage />}
				text="Bridge"
			/>

			<SidebarMenuItem
				icon={<IconPieChart />}
				text="Smart Invest"
			/>

			<SidebarMenuItem
				icon={<IconLogoW />}
				text="Loyalty"
			/>
		</div>
	)
}

export default SidebarMenu;