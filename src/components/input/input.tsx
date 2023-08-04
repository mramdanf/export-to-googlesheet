import React from 'react';
import cx from 'classnames';
import classes from './input.module.css';
import SearchIcon from '../icons/search-icon';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  searchable?: boolean;
  wrapperClass?: string;
}

function Input({ searchable, wrapperClass, ...rest }: InputProps) {
  if (searchable) {
    return (
      <div className={cx(classes.wrapper, wrapperClass)}>
        <SearchIcon />
        <input type="text" placeholder="Search" {...rest} />
      </div>
    );
  }
  return <input {...rest} />;
}

export default Input;
