import React, { useState } from 'react';
import cx from 'classnames';
import classes from './select.module.css';
import DownIcon from '../icons/down-icon';
import Input from '../input/input';

type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options: Array<SelectOption>;
  type: 'single' | 'multiple';
  triggerDropdownClass?: string;
}

function Select({ options, type, className, triggerDropdownClass, ...rest }: SelectProps) {
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
    <div className={classes.select} {...rest}>
      <div
        className={cx(classes.triggerDropdown, triggerDropdownClass)}
        onClick={() => setShowOption(!showOption)}>
        <span>{selectedOption.label}</span>
        <DownIcon className={classes.downIcon} />
      </div>
      {showOption && (
        <div className={cx(classes.optionsOverlay)}>
          <Input searchable />
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
