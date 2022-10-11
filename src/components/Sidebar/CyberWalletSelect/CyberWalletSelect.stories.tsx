import React from 'react';
import CyberWalletSelect from './CyberWalletSelect'

export default {
	title: 'Components/CyberWalletSelect',
	component: CyberWalletSelect,
}

export const Default = () => (
	<CyberWalletSelect />
);
export const Connected = () => (
	<CyberWalletSelect connected />
);