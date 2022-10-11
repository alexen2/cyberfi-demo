import React from 'react';
import Button from '../../ui/Button/Button';
import Chip from '../../ui/Chip/Chip';
import Divider from '../../ui/Divider/Divider';
import { IconCardGiftcard, IconEthereum, IconListAlt, IconNotifications, IconSettings } from '../../ui/Icon/Icon';
import IconText from '../../ui/IconText/IconText';
import Logo from '../../ui/Logo/Logo';
import Select from '../../ui/Select/Select';
import Stack from '../../ui/Stack/Stack';
import Typography from '../../ui/Typography/Typography';
import AssetPanel from '../AssetPanel/AssetPanel';
import CyberWalletSelect from './CyberWalletSelect/CyberWalletSelect';
import OwnerAccountSelect from './OwnerAccountSelect/OwnerAccountSelect';
import './sidebar.scss';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const Sidebar: React.FC = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Logo />

				<Stack gap='4px'>
					<Button
						variant='secondary' 
						size='xs'
						onlyIcon
						onClick={() => {console.log('click')}}
					>
						<IconNotifications />
					</Button>

					<Button
						variant='secondary' 
						size='xs'
						onlyIcon
						onClick={() => {console.log('click')}}
					>
						<IconSettings />
					</Button>
				</Stack>
			</div>

			<div className="sidebar__body scrollbar">
				<div className="sidebar__top">
					<OwnerAccountSelect />
					
					<CyberWalletSelect connected />

					<Divider />

					<Stack gap='4px'>
						<Chip size='s'>
							<IconCardGiftcard />
							<Typography variant='body'>Rewards</Typography>							
						</Chip>
						
						<Select size='s'>
							<IconText
								icon={<IconListAlt />}
								text="Quests"
							/>

							<IconText
								icon={<IconListAlt />}
								text="Quests"
							/>
						</Select>
					</Stack>

					<Divider />

					<AssetPanel />
				</div>

				<SidebarMenu />

				<Divider />

				<div className="sidebar__choose-network">
					<Select>
						<IconText
							icon={<IconEthereum />}
							text="Ethereum"
							img
						/>

						<IconText
							icon={<IconEthereum />}
							text="Ethereum"
							img
						/>
					</Select>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;