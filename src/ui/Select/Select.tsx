import React from 'react';
import { IconUnfoldMore } from '../Icon/Icon';
import './select.scss';

type SelectProps = {
	children: React.ReactNode[],
	size?: 'm' | 's'
}

const Select: React.FC<SelectProps> = ({
	children,
	size = 'm'
}) => {
	return (
		<div 
			className={`select 
				${size ? 'select--size-' + size : ''}
			`}
		>
			<div className="select__header">
				{children[0]}

				<div className="select__header-icon">
					<IconUnfoldMore />
				</div>
			</div>

			<div className="select__dropdown">
				{children}
			</div>
		</div>
	)
}

export default Select;