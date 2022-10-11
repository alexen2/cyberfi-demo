import React from 'react';
import ProgressBar from './ProgressBar'

export default {
	title: 'UI/ProgressBar',
	component: ProgressBar,
}

export const Default = () => (
	<ProgressBar />
);
export const Value85 = () => (
	<ProgressBar value={85} />
);