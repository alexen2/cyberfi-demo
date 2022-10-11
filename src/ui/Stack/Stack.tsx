import React from 'react'
import './stack.scss'

type StackProps = {
	children: React.ReactNode,
	gap?: string,
	direction?: 'row' | 'column',
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around',
	align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
	display?: 'inline-flex' | 'flex,',
	width?: '100%' | 'auto'
}

const Stack: React.FC<StackProps> = ({
	children,
	gap = 'initial',
	direction = 'row',
	justify = 'flex-start',
	align = 'flex-start',
	display = 'flex',
	width = 'auto',
}) => {
	return (
		<div 
			className='stack'
			style={{ 
				display: display,
				width: width,
				gap: gap,
				flexDirection: direction,
				justifyContent: justify,
				alignItems: align,
			}}
		>
			{children}
		</div>
	)
}

export default Stack