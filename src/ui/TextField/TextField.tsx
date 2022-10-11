import React from 'react';
import { IconApps } from '../Icon/Icon';
import Typography from '../Typography/Typography';
import './text-field.scss';

type TextFieldProps = {
	label?: string,
	icon?: React.ReactNode,
	passwordShow?: boolean,
	check?: boolean,
	clear?: boolean,
	placeholder?: string,
	error?: boolean,
	errorMsg?: string
}

const TextField: React.FC<TextFieldProps> = ({
	label,
	icon,
	passwordShow,
	check,
	clear,
	placeholder,
	error,
	errorMsg
}) => {
	return (
		<div className="text-field">
			{label && (
				<div className="text-field__label">
					<Typography variant='body'>
						{label}
					</Typography>
				</div>
			)}

			<div className="text-field__body">
				{icon}

				<input 
					type="text" 
					placeholder={placeholder}
				/>

				{check && (
					<IconApps />
				)}

				{clear && (
					<button className='text-field__clear' onClick={() => {}}>
						<IconApps />
					</button>
				)}
			</div>

			<div className="text-field__footer">
				{errorMsg && (
					<Typography variant='badge' color='error'>
						{errorMsg}
					</Typography>
				)}
			</div>
		</div>
	)
}

export default TextField;