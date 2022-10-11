import React from 'react';
import Tab from './Tab'

export default {
	title: 'UI/Tab',
	component: Tab,
}

export const Default = () => (
	<Tab>Tab name</Tab>
);
export const Active = () => (
	<Tab active>Tab name</Tab>
);