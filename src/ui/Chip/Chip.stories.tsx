import React from 'react';
import { IconApps } from '../Icon/Icon';
import Typography from '../Typography/Typography';
import Chip from './Chip'

export default {
	title: 'UI/Chip',
	component: Chip,
}

export const Default = () => (
	<Chip>
		<Typography variant='body'>Chip</Typography>
	</Chip>
);
export const Active = () => (
	<Chip isActive>
		<Typography variant='body'>Chip</Typography>
	</Chip>
);
export const ActiveIcon = () => (
	<Chip isActive>
		<Typography variant='body'>Chip</Typography>
		<IconApps />
	</Chip>
);
export const Icon = () => (
	<Chip>
		<Typography variant='body'>Chip</Typography>
		<IconApps />
	</Chip>
);
export const Secondary = () => (
	<Chip variant='secondary'>
		<Typography variant='body'>Chip</Typography>
	</Chip>
);
export const SecondaryActive = () => (
	<Chip
		variant='secondary'
	 isActive
	>
		<Typography variant='body'>Chip</Typography>
	</Chip>
);
export const SecondaryActiveIcon = () => (
	<Chip
		variant='secondary'
	 isActive
	>
		<Typography variant='body'>Chip</Typography>
		<IconApps />
	</Chip>
);
export const Tertiary = () => (
	<Chip variant='tertiary'>
		<Typography variant='body'>Chip</Typography>
	</Chip>
);
export const _IconSizeL = () => (
	<Chip size='l'>
		<Typography variant='body'>Chip</Typography>
		<IconApps />
	</Chip>
);
export const _IconSizeS = () => (
	<Chip size='s'>
		<Typography variant='body'>Chip</Typography>
		<IconApps />
	</Chip>
);
export const _IconSizeXS= () => (
	<Chip size='xs'>
		<Typography variant='body'>Chip</Typography>
		<IconApps />
	</Chip>
);