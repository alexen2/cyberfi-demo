import React from 'react';
import './chip.scss';

type ChipProps = {
	children: React.ReactNode,
	variant?: 'primary' | 'secondary' | 'tertiary',
	size?: 'l' | 'm' | 's' | 'xs',
	isActive?: boolean,
}

const Chip: React.FC<ChipProps> = ({ 
	children,
	variant='primary',
	size='m',
	isActive,
}) => {
	return (
		<div 
			className={`
				chip 
				chip--${variant} 
				chip--size-${size} 
				${isActive ? 'chip--active' : ''} 
			`} 
			tabIndex={1}
		>
			{children}
		</div>
	)
}

export default Chip;