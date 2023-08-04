import React from 'react';

import classes from './input.module.css';
import SearchIcon from '../icons/search-icon';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  searchable?: boolean;
}

function Input({ searchable, ...rest }: InputProps) {
  if (searchable) {
    return (
      <div className={classes.wrapper}>
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
    );
  }
  return <input {...rest} />;
}

export default Input;
