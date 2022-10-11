import React from 'react';
import './progress-bar.scss';

type ProgressBarProps = {
	value?: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value=0 }) => {
	return (
		<div className="progress-bar">
			<div className="progress-bar__value" style={{ width: value + '%' }} />
		</div>
	)
}

export default ProgressBar;