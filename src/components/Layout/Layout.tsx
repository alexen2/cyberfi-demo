import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';

type LayoutProps = {
	children: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = ({
	children
}) => {
	const [isShowSidebar, setIsShowSidebar] = useState(false)

	const toggleSidebar = () => {
		setIsShowSidebar(!isShowSidebar);
	}

	return (
		<div className="layout">
			<div className={`layout__sidebar ${isShowSidebar ? 'layout__sidebar--show' : ''}`}>
				<Sidebar />
			</div>

			<div className="layout__body">
				<div className="layout__header">
					<Header toggleSidebar={toggleSidebar} />
				</div>

				<div className="layout__main">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout;