import React from 'react';
import Typography from '../../Typography/Typography';
import './tab.scss';

type TabProps = {
	children: string,
	active?: boolean
}

const Tab: React.FC<TabProps> = ({
	children,
	active
}) => {
	return (
		<div 
			className={`
				tab 
				${active ? 'tab--active' : ''}
			`}
			tabIndex={1}
		>
			<Typography variant='body' secondary>{children}</Typography>
		</div>
	)
}

export default Tab;