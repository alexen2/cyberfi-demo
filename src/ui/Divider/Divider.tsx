import React from 'react'
import './divider.scss'

type DividerProps = {
	vertical?: boolean 
}

const Divider: React.FC<DividerProps> = ({
	vertical
}) => {
	return (
		<div className={`divider ${vertical ? 'divider--vertical' : ''}`} />
	)
}

export default Divider