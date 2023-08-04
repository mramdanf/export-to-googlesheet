import React, { useCallback, useMemo, useRef, useState } from 'react';
import cx from 'classnames';
import { SelectOption } from '@/types/app';
import classes from './select.module.css';
import DownIcon from '../icons/down-icon';
import Input from '../input/input';
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick';
import { deselectOption, isOptionSelected } from './select.utils';
import CheckIcon from '../icons/check-icon';

interface SelectProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options: Array<SelectOption>;
  type: 'single' | 'multiple';
  triggerDropdownClass?: string;
}

function Select({ options, type, className, triggerDropdownClass, ...rest }: SelectProps) {
  const [showOption, setShowOption] = useState<boolean>(false);
  const selectOptions = options && Array.isArray(options) ? options : [];
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>(
    selectOptions ? [selectOptions[0]] : []
  );
  const optionOverlayRef = useRef<HTMLDivElement>(null);

  const outSideClickCallback = useCallback(() => {
    setShowOption(false);
  }, []);
  useDetectOutsideClick(optionOverlayRef, outSideClickCallback);

  const handleOptionSelected = useCallback(
    (option: SelectOption) => {
      if (type === 'single') {
        setSelectedOptions([option]);
        setShowOption(false);
        return;
      }

      const optionExist = isOptionSelected(selectedOptions, option);

      if (optionExist && selectedOptions.length === 1) {
        return;
      }

      if (optionExist && selectedOptions.length > 1) {
        setSelectedOptions([...deselectOption(selectedOptions, option)]);
        return;
      }

      setSelectedOptions([...selectedOptions, option]);
    },
    [selectedOptions, type, setSelectedOptions]
  );

  const selectOptionsWithChecklist = useMemo(() => {
    const optionsData = options && Array.isArray(options) ? options : [];
    return optionsData.map((selectOption) => ({
      ...selectOption,
      selected: isOptionSelected(selectedOptions, selectOption)
    }));
  }, [options, selectedOptions]);

  return (
    <div className={classes.select} {...rest}>
      <div
        className={cx(classes.triggerDropdown, triggerDropdownClass)}
        onClick={() => setShowOption(!showOption)}>
        <span>{selectedOptions.map((option) => option.label).join(',')}</span>
        <DownIcon className={classes.downIcon} />
      </div>
      {showOption && (
        <div className={classes.optionsOverlay} ref={optionOverlayRef}>
          <Input wrapperClass={classes.inputWrapper} searchable />
          <ul>
            {selectOptionsWithChecklist.map((option) => (
              <li key={option.value} onClick={() => handleOptionSelected(option)}>
                <span>{option.label}</span>
                {option.selected && <CheckIcon />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
