import React from 'react';
import './tabs.scss';

type TabsProps = {
	children: React.ReactNode
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
	return (
		<div className="tabs">
			{children}
		</div>
	)
}

export default Tabs;