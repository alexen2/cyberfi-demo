import React from 'react';
import { IconLogo } from '../../ui/Icon/Icon';
import Tab from '../../ui/Tabs/Tab/Tab';
import TabPanel from '../../ui/Tabs/TabPanel/TabPanel';
import Tabs from '../../ui/Tabs/Tabs';
import './asset-panel.scss';
import IdleAssetsItem from './IdleAssetsList/IdleAssetsItem/IdleAssetsItem';
import IdleAssetsList from './IdleAssetsList/IdleAssetsList';

const AssetPanel: React.FC = () => {
	return (
		<div className="asset-panel">
			<div className="asset-panel__header">
				<Tabs>
					<Tab active>Idle Assets</Tab>
					<Tab>LP Tokens</Tab>
					<Tab>Deposits</Tab>
				</Tabs>
			</div>

			<div className="asset-panel__body">
				<TabPanel active={1} index={1}>
					<IdleAssetsList>
						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>

						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>

						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>

						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>

						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>

						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>

						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>

						<IdleAssetsItem
							icon={<IconLogo />}
							asset="ASSET"
							value="999,999.999"
							value2="(~$999,999)"
						/>
					</IdleAssetsList>
				</TabPanel>

				<TabPanel active={1} index={2}>TabPanel 2</TabPanel>
				<TabPanel active={1} index={3}>TabPanel 3</TabPanel>
			</div>
		</div>
	)
}

export default AssetPanel;