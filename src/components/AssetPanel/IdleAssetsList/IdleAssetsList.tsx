import React from 'react';
import './idle-assets-list.scss';

type IdleAssetsListProps = {
	children: React.ReactNode
}

const IdleAssetsList: React.FC<IdleAssetsListProps> = ({ children }) => {
	return (
		<div className="idle-assets-list">
			{children}
		</div>
	)
}

export default IdleAssetsList;