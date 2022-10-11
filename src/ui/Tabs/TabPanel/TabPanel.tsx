import React from 'react';
import './tab-panel.scss';

type TabPanelProps = {
	children: React.ReactNode,
	active: number,
	index: number
}

const TabPanel: React.FC<TabPanelProps> = ({
	children,
	active,
	index
}) => {
	return (
		<div 
			className={`
				tab-panel 
				${active === index ? 'tab-panel--active' : ''}
			`}
		>
			{children}
		</div>
	)
}

export default TabPanel;