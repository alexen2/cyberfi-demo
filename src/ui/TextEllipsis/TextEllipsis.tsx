import React from 'react';
import './text-ellipsis.scss';

type TextEllipsisProps = {
	children: React.ReactNode,
	size?: 'body' | 'badge'
}

const TextEllipsis: React.FC<TextEllipsisProps> = ({ 
	children,
	size = 'body'
}) => {
	return (
		<div className={`text-ellipsis ${'text-ellipsis--size-' + size}`}>
			{children}
		</div>
	)
}

export default TextEllipsis;