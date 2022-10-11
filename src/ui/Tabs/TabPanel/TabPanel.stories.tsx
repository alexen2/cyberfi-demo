import React from 'react';
import TabPanel from './TabPanel'

export default {
	title: 'UI/TabPanel',
	component: TabPanel,
}

export const Default = () => (
	<TabPanel active={1} index={1}>TabPanel</TabPanel>
);