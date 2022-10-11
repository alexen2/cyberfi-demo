import React from 'react';
import IconText from '../../../../ui/IconText/IconText';
import Stack from '../../../../ui/Stack/Stack';
import Typography from '../../../../ui/Typography/Typography';
import './idle-assets-item.scss';

type IdleAssetsItemProps = {
	icon: React.ReactNode,
	asset: string,
	value: string,
	value2: string,
}

const IdleAssetsItem: React.FC<IdleAssetsItemProps> = ({ 
	icon,
	asset,
	value,
	value2
}) => {
	return (
		<div className="idle-assets-item">
			<IconText
				icon={icon}
				text={asset}
				img
			/>

			<Stack gap='4px'>
				<Typography variant='body'>{value}</Typography>
				<Typography variant='body' secondary>{value2}</Typography>
			</Stack>
		</div>
	)
}

export default IdleAssetsItem;