import React from 'react';
import './icon.scss';
import IconAppsSvg from '../../assets/icon/icon--apps.svg';
import IconEthereumSvg from '../../assets/icon/icon--ethereum.svg';
import IconShowChartSvg from '../../assets/icon/icon--show-chart.svg';
import IconBarChartSvg from '../../assets/icon/icon--bar-chart.svg';
import IconSwapHorizSvg from '../../assets/icon/icon--swap-horiz.svg';
import IconStorageSvg from '../../assets/icon/icon--storage.svg';
import IconPieChartSvg from '../../assets/icon/icon--pie-chart.svg';
import IconLogoWSvg from '../../assets/icon/icon--logo-w.svg';
import IconSettingsSvg from '../../assets/icon/icon--settings.svg';
import IconNotificationsSvg from '../../assets/icon/icon--notifications.svg';
import IconUnfoldMoreSvg from '../../assets/icon/icon--unfold-more.svg';
import IconMenuOpenSvg from '../../assets/icon/icon--menu-open.svg';
import IconSearchSvg from '../../assets/icon/icon--search.svg';
import IconLocalGasStationSvg from '../../assets/icon/icon--local-gas-station.svg';
import IconCardGiftcardSvg from '../../assets/icon/icon--card-giftcard.svg';
import IconListAltSvg from '../../assets/icon/icon--list-alt.svg';
import IconFileCopySvg from '../../assets/icon/icon--file-copy.svg';
import IconOpenInNewSvg from '../../assets/icon/icon--open-in-new.svg'
import IconLogoSvg from '../../assets/icon/icon--logo-s.svg'

type IconProps = {	
	name: string,
	id: string,
}

export const Icon: React.FC<IconProps> = ({
  name,
  id,
}) => (
  <svg className={`icon ${id}`}>
    <use xlinkHref={`${name}#${id}`} />
  </svg>
)

export const IconLogo: React.FC = () => (
	<Icon name={IconLogoSvg} id="icon--logo-s" />
)
export const IconOpenInNew: React.FC = () => (
	<Icon name={IconOpenInNewSvg} id="icon--open-in-new" />
)
export const IconFileCopy: React.FC = () => (
	<Icon name={IconFileCopySvg} id="icon--file-copy" />
)
export const IconListAlt: React.FC = () => (
	<Icon name={IconListAltSvg} id="icon--list-alt" />
)
export const IconCardGiftcard: React.FC = () => (
	<Icon name={IconCardGiftcardSvg} id="icon--card-giftcard" />
)
export const IconLocalGasStation: React.FC = () => (
	<Icon name={IconLocalGasStationSvg} id="icon--local-gas-station" />
)
export const IconSearch: React.FC = () => (
	<Icon name={IconSearchSvg} id="icon--search" />
)
export const IconMenuOpen: React.FC = () => (
	<Icon name={IconMenuOpenSvg} id="icon--menu-open" />
)
export const IconUnfoldMore: React.FC = () => (
	<Icon name={IconUnfoldMoreSvg} id="icon--unfold-more" />
)
export const IconNotifications: React.FC = () => (
	<Icon name={IconNotificationsSvg} id="icon--notifications" />
)
export const IconSettings: React.FC = () => (
	<Icon name={IconSettingsSvg} id="icon--settings" />
)
export const IconApps: React.FC = () => (
	<Icon name={IconAppsSvg} id="icon--apps" />
)
export const IconEthereum: React.FC = () => (
	<Icon name={IconEthereumSvg} id="icon--ethereum" />
)
export const IconShowChart: React.FC = () => (
	<Icon name={IconShowChartSvg} id="icon--show-chart" />
)
export const IconBarChart: React.FC = () => (
	<Icon name={IconBarChartSvg} id="icon--bar-chart" />
)
export const IconSwapHoriz: React.FC = () => (
	<Icon name={IconSwapHorizSvg} id="icon--swap-horiz" />
)
export const IconStorage: React.FC = () => (
	<Icon name={IconStorageSvg} id="icon--storage" />
)
export const IconPieChart: React.FC = () => (
	<Icon name={IconPieChartSvg} id="icon--pie-chart" />
)
export const IconLogoW: React.FC = () => (
	<Icon name={IconLogoWSvg} id="icon--logo-w" />
)