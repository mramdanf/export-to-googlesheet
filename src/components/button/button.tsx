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

function Button({ children, category, className, ...rest }: CustomButtonProps) {
  const btnClasses = cx({
    [classes.buttonPrimary]: category === 'primary',
    [classes.buttonDefault]: !category || category === 'default',
    [className || '']: !!className
  });
  return (
    <button className={btnClasses} {...rest}>
      {children}
    </button>
  );
}

export default Button;
