import React from 'react';
import Tab from './Tab/Tab';
import Tabs from './Tabs'

export default {
	title: 'UI/Tabs',
	component: Tabs,
}

export const Default = () => (
	<Tabs>
		<Tab active>Tab name</Tab>
		<Tab>Tab name</Tab>
		<Tab>Tab name</Tab>
	</Tabs>
);