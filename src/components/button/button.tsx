import React from 'react';
import cx from 'classnames';
import classes from './button.module.css';

interface CustomButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  category?: 'primary' | 'default';
}

function Button({ children, category, ...rest }: CustomButtonProps) {
  return (
    <button
      className={cx(
        {
          [classes.buttonPrimary]: category === 'primary'
        },
        rest.className
      )}
      {...rest}>
      {children}
    </button>
  );
}

export default Button;
