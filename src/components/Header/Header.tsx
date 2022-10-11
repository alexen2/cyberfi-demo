import React from 'react';
import Button from '../../ui/Button/Button';
import { IconMenuOpen, IconSearch } from '../../ui/Icon/Icon';
import TextField from '../../ui/TextField/TextField';
import './header.scss';
import TopTradingPrice from './TopTradingPrice/TopTradingPrice';

type HeaderProps = {
	toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
	return (
		<header className="header">
			<div className="header__sidebar-toggle">
				<Button 
					variant='secondary'
					size='xs'
					onlyIcon 
					onClick={toggleSidebar}
				>
					<IconMenuOpen />
				</Button>
			</div>

			<div className="header__search">
				<TextField 
					placeholder='Search for assets and pairs...'
					icon={<IconSearch />}
				/>
			</div>

			<TopTradingPrice />
		</header>
	)
}

export default Header;