import React from 'react';
import './button.scss';

type ButtonProps = {
  children?: React.ReactNode,
  variant?: 'accent' | 'primary' | 'secondary' | 'tertiary',
  size?: 'm' | 's' | 'xs' | 'xxs',
  type?: 'submit' | 'button' | 'reset',
  onlyIcon?: boolean,
  onClick: () => void,
  disabled?: boolean,
  href?: string,
  targetBlank?: boolean,
  isBlock?: boolean,
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant='accent',
  size='m',
  type='button',
  onlyIcon,
  onClick,
  disabled,  
  href,
  targetBlank,
  isBlock,
}) => {
  const attributes = {
    className: `
      button
      button--${variant}
      button--size-${size}
      ${onlyIcon ? 'button--only-icon' : ''}
      ${isBlock ? 'button--block' : ''}
    `,
    onClick: onClick,
  }

  return (
    <>
      {href ? (
        <a
          {...attributes}
          href={href}
          {...(targetBlank ? { target: '_blank' } : '')}
        >
          {children}
        </a>
      ) : (
        <button
          {...attributes}
          type={type === 'submit' ? 'submit' : 'button'}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button