import React, { useState } from 'react';
import cx from 'classnames';
import classes from './select.module.css';
import DownIcon from '../icons/down-icon';

type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options: Array<SelectOption>;
  type: 'single' | 'multiple';
}

function Select({ options, type, className, ...rest }: SelectProps) {
  const [showOption, setShowOption] = useState<boolean>(false);
  const selectOptions = options && Array.isArray(options) ? options : [];
  const [selectedOption, setSelectedOption] = useState<SelectOption>(
    selectOptions.length ? selectOptions[0] : ({} as SelectOption)
  );

  function handleOptionSelected(option: SelectOption) {
    setSelectedOption(option);

    if (type === 'single') {
      setShowOption(false);
    }
  }

  return (
    <div className={cx(classes.select, className)} {...rest}>
      <div className={classes.triggerDropdown} onClick={() => setShowOption(!showOption)}>
        <span>{selectedOption.label}</span>
        <DownIcon className={classes.downIcon} />
      </div>
      {showOption && (
        <div className={cx(classes.optionsOverlay)}>
          <ul>
            {selectOptions.map((option) => (
              <li key={option.value} onClick={() => handleOptionSelected(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
