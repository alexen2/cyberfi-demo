import React from 'react';
import LogoImg from './logo.svg';
import './logo.scss';

const Logo: React.FC = () => {
	return (
		<a href="/" className="logo">
			<img src={LogoImg} alt="CyberFi" />
		</a>
	)
}

export default Logo;