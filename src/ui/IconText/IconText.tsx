import React from 'react';
import Typography from '../Typography/Typography';
import './icon-text.scss';

type IconTextProps = {
	icon: React.ReactNode,
	text: string,
	img?: boolean,
	size?: 'body' | 'badge'
}

const IconText: React.FC<IconTextProps> = ({
	icon,
	text,
	img,
	size='body'
}) => {
	return (
		<div 
			className={`
				icon-text 
				${img ? 'icon-text--img' : ''} 
			`}
		>
			{icon}

			<Typography variant={size}>
				{text}
			</Typography>
		</div>
	)
}

export default IconText;