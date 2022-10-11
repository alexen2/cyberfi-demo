import React from 'react';
import Stack from '../../../ui/Stack/Stack';
import Typography from '../../../ui/Typography/Typography';
import imgPic from '../../../assets/images/metamask-logo.png';
import './owner-account-select.scss';
import Button from '../../../ui/Button/Button';
import { IconFileCopy, IconLogoW, IconOpenInNew, IconUnfoldMore } from '../../../ui/Icon/Icon';
import ProgressBar from '../../../ui/ProgressBar/ProgressBar';
import IconText from '../../../ui/IconText/IconText';

type OwnerAccountSelectProps = {
	connected?: boolean
}

const OwnerAccountSelect: React.FC<OwnerAccountSelectProps> = ({ connected }) => {
	return (
		<div 
			className={`owner-account-select ${connected ? 'owner-account-select--connected' : ''}`} 
			tabIndex={1}
		>
			<Stack gap='8px' align='center' justify='space-between'>			
				<div className="owner-account-select__value">
					<img src={imgPic} alt="" />

					<Typography variant='lead'>$999,999.999</Typography>
				</div>

				<div className="owner-account-select__actions">
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
			</Stack>

			<ProgressBar value={85} />

			<Stack gap='4px' align='center' justify='space-between'>
				<IconText
					icon={<IconLogoW />}
					text="Lv. 999"
					size='badge'
				/>

				<Stack align='center'>
					<Typography variant='badge' secondary>Exp&nbsp;&nbsp;·&nbsp;&nbsp;</Typography>
					<Typography variant='badge'>9999 / 9999</Typography>
				</Stack>
			</Stack>
		</div>
	)
}

export default OwnerAccountSelect;