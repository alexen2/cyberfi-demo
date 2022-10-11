import React from 'react';
import Stack from '../../../ui/Stack/Stack';
import Typography from '../../../ui/Typography/Typography';
import imgPic from '../../../assets/images/pictogram.png';
import './cyber-wallet-select.scss';
import Button from '../../../ui/Button/Button';
import { IconFileCopy, IconOpenInNew, IconUnfoldMore } from '../../../ui/Icon/Icon';

type CyberWalletSelectProps = {
	connected?: boolean
}

const CyberWalletSelect: React.FC<CyberWalletSelectProps> = ({ connected }) => {
	return (
		<div 
			className={`cyber-wallet-select ${connected ? 'cyber-wallet-select--connected' : ''}`} 
			tabIndex={1}
		>
			<div className="cyber-wallet-select__value">
				<img src={imgPic} alt="" />

				<Typography variant='lead'>$999,999.999</Typography>
			</div>

			<div className="cyber-wallet-select__actions">
				<Stack gap='4px' align='center'>					
					<Typography variant='badge' secondary>0x0000000</Typography>

					<Stack gap='4px'>
						<Button 
							onlyIcon
							variant='secondary'
							size='xxs'
							onClick={() => {console.log('click')}}
						>
							<IconFileCopy />
						</Button>

						<Button 
							onlyIcon
							variant='secondary'
							size='xxs'
							onClick={() => {console.log('click')}}
						>
							<IconOpenInNew />
						</Button>
					</Stack>
				</Stack>

				<Button 
					onlyIcon
					variant='primary'
					size='xs'
					onClick={() => {console.log('click')}}
				>
					<IconUnfoldMore />
				</Button>
			</div>
		</div>
	)
}

export default CyberWalletSelect;