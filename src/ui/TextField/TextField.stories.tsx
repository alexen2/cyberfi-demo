import React from 'react';
import { IconApps } from '../Icon/Icon';
import TextField from './TextField';

export default {
	title: 'UI/TextField',
	component: TextField,
}

export const Default = () => (
	<TextField 
		label='Field name'
		placeholder='Text field'
		errorMsg='Error message'
		icon={<IconApps />}
		clear
	/>
);