import React from 'react';
import { IconApps } from '../Icon/Icon';
import Button from './Button'

export default {
	title: 'UI/Button',
	component: Button,
}

export const AccentDefault = () => (
	<Button 
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const AccentIconLeft = () => (
	<Button 
		onClick={() => {console.log('click')}}
	>
		<IconApps />
		Button
	</Button>
);
export const AccentIconRight = () => (
	<Button 
		onClick={() => {console.log('click')}}
	>		
		Button
		<IconApps />
	</Button>
);
export const AccentOnlyIcon = () => (
	<Button 
		onlyIcon
		onClick={() => {console.log('click')}}
	>
		<IconApps />
	</Button>
);
export const AccentDisabled = () => (
	<Button 
		disabled
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const Primary = () => (
	<Button 
		variant='primary'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const PrimaryIconLeft = () => (
	<Button 
		variant='primary'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
		Button		
	</Button>
);
export const PrimaryIconRight = () => (
	<Button 
		variant='primary'
		onClick={() => {console.log('click')}}
	>		
		Button	
		<IconApps />	
	</Button>
);
export const PrimaryOnlyIcon = () => (
	<Button 
		onlyIcon
		variant='primary'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
	</Button>
);
export const Secondary = () => (
	<Button 
		variant='secondary'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const SecondaryIconLeft = () => (
	<Button 
		variant='secondary'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
		Button		
	</Button>
);
export const SecondaryIconRight = () => (
	<Button 
		variant='secondary'
		onClick={() => {console.log('click')}}
	>		
		Button	
		<IconApps />	
	</Button>
);
export const SecondaryOnlyIcon = () => (
	<Button 
		onlyIcon
		variant='secondary'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
	</Button>
);
export const SecondaryDisabled = () => (
	<Button 
		disabled
		variant='secondary'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const Tertiary = () => (
	<Button 
		variant='tertiary'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const TertiaryIconLeft = () => (
	<Button 
		variant='tertiary'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
		Button		
	</Button>
);
export const TertiaryIconRight = () => (
	<Button 
		variant='tertiary'
		onClick={() => {console.log('click')}}
	>		
		Button	
		<IconApps />	
	</Button>
);
export const TertiaryOnlyIcon = () => (
	<Button 
		onlyIcon
		variant='tertiary'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
	</Button>
);
export const TertiaryDisabled = () => (
	<Button 
		disabled
		variant='tertiary'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const _AccentDefaultSizeS = () => (
	<Button 
		size='s'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const _AccentDefaultSizeSIconLeft = () => (
	<Button 
		size='s'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
		Button
	</Button>
);
export const _AccentDefaultSizeSOnlyIcon = () => (
	<Button 
		size='s'
		onlyIcon
		onClick={() => {console.log('click')}}
	>
		<IconApps />
	</Button>
);
export const _AccentDefaultSizeXS = () => (
	<Button 
		size='xs'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const _AccentDefaultSizeXSIconLeft = () => (
	<Button 
		size='xs'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
		Button
	</Button>
);
export const _AccentDefaultSizeXSOnlyIcon = () => (
	<Button 
		size='xs'
		onlyIcon
		onClick={() => {console.log('click')}}
	>
		<IconApps />
	</Button>
);
export const _AccentDefaultSizeXXS = () => (
	<Button 
		size='xxs'
		onClick={() => {console.log('click')}}
	>
		Button
	</Button>
);
export const _AccentDefaultSizeXXSIconLeft = () => (
	<Button 
		size='xxs'
		onClick={() => {console.log('click')}}
	>
		<IconApps />
		Button
	</Button>
);
export const _AccentDefaultSizeXXSOnlyIcon = () => (
	<Button 
		size='xxs'
		onlyIcon
		onClick={() => {console.log('click')}}
	>
		<IconApps />
	</Button>
);