import React from 'react';
import { IconApps, IconLocalGasStation } from '../../../ui/Icon/Icon';
import Typography from '../../../ui/Typography/Typography';
import './top-trading-price.scss';

const TopTradingPrice: React.FC = () => (
	<div className="top-trading-price">
		<div className="top-trading-price__item">
			<IconApps />

			<Typography variant='body' secondary>
				$999,999
			</Typography>
		</div>

		<div className="top-trading-price__item">
			<IconLocalGasStation />

			<Typography variant='body' secondary>
				999 GWEI
			</Typography>
		</div>
	</div>
)

export default TopTradingPrice;