import React from 'react'
import './typography.scss'

type TypographyProps = {
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'body' | 'control' | 'control-label' | 'footnote' | 'badge' | 'disclaimer',
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span' | 'b',
	align?: 'center' | 'inherit' | 'justify' | 'left' | 'right',
	color?: 'info' | 'success' | 'warning' | 'error',
	bold?: boolean,
	children: React.ReactNode,
	secondary?: boolean,
	underline?: boolean,
	uppercase?: boolean,
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	tag,
	align,
	color,
	bold,
	children,
	secondary,
	underline,
	uppercase
}) => {
	const variantTag = {
		'h1' : 'h1',
		'h2' : 'h2',
		'h3' : 'h3',
		'h4' : 'h4',
		'h5' : 'h5',
		'h6' : 'h6',
		'lead' : 'p',
		'body' : 'p',
		'control' : 'span',
		'control-label' : 'span',
		'footnote' : 'div',
		'badge' : 'div',
		'disclaimer' : 'p',
	}

	const TypographyBasae: any = tag ? tag : variantTag[variant];

	return (
		<TypographyBasae 
			className={`
				typography 
				${variant} 
				${align ? 'align-' + align : ''} 
				${bold ? 'bold' : ''} 
				${secondary ? 'secondary' : ''} 
				${underline ? 'underline' : ''} 
				${uppercase ? 'uppercase' : ''} 
				${color ? color : ''} 
			`}
		>
			{children}
		</TypographyBasae>
	)
}

export default Typography