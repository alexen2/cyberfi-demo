import React from 'react';
import IconText from '../../../../ui/IconText/IconText';
import './sidebar-menu-item.scss';

type SidebarMenuItemProps = {
	icon: React.ReactNode,
	text: string,
	active?: boolean
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
	icon,
	text,
	active
}) => {
	return (
		<div 
			className={`sidebar-menu-item ${active ? 'sidebar-menu-item--active' : ''}`}
			tabIndex={1}
		>
			<IconText
				icon={icon}
				text={text}
				img
			/>
		</div>
	)
}

export default SidebarMenuItem;