import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  searchable?: boolean;
  onSelectedOption?: (selectedOption: SelectOption) => void;
  onDropdownVisibleChange?: (open: boolean) => void;
}

const OVERLAY_MIN_WIDTH = 180;

function Select({
  options,
  type,
  className,
  triggerDropdownClass,
  searchable,
  onSelectedOption,
  onDropdownVisibleChange,
  ...rest
}: SelectProps) {
  const [showOption, setShowOption] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>(
    options?.length ? [options[0]] : []
  );
  const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>(
    options?.length ? options : []
  );
  const [overlayWidth, setOverlayWidth] = useState<number>(OVERLAY_MIN_WIDTH);
  const optionOverlayRef = useRef<HTMLDivElement>(null);
  const triggerDropdownRef = useRef<HTMLDivElement>(null);

  const outSideClickCallback = useCallback(() => {
    setShowOption(false);
  }, []);
  useDetectOutsideClick(optionOverlayRef, outSideClickCallback);

  const handleOptionSelected = useCallback(
    (option: SelectOption) => {
      if (type === 'single') {
        setSelectedOptions([option]);
        setShowOption(false);

        if (onSelectedOption) {
          onSelectedOption(option);
        }

        return;
      }

      const optionExist = isOptionSelected(selectedOptions, option);

      if (optionExist && selectedOptions.length === 1) {
        return;
      }

      if (optionExist && selectedOptions.length > 1) {
        setSelectedOptions(deselectOption(selectedOptions, option));
        return;
      }

      setSelectedOptions([...selectedOptions, option]);
    },
    [selectedOptions, type, setSelectedOptions, onSelectedOption]
  );

  const handleOnSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const keywords = e.target.value;
      setFilteredOptions(
        options?.filter((option) => option.label.toLowerCase().includes(keywords.toLowerCase()))
      );
    },
    [options]
  );

  useEffect(() => {
    const triggerDropdownWidth = triggerDropdownRef.current?.offsetWidth || 0;
    if (triggerDropdownWidth <= OVERLAY_MIN_WIDTH) {
      return;
    }

    setOverlayWidth(triggerDropdownWidth);
  }, [triggerDropdownRef]);

  useEffect(() => {
    if (onDropdownVisibleChange) {
      onDropdownVisibleChange(showOption);
    }
  }, [showOption, onDropdownVisibleChange]);

  useEffect(() => {
    return () => {
      setFilteredOptions(options?.length ? options : []);
    };
  }, [options]);

  const selectOptionsWithChecklist = useMemo(() => {
    return filteredOptions.map((selectOption) => ({
      ...selectOption,
      selected: isOptionSelected(selectedOptions, selectOption)
    }));
  }, [filteredOptions, selectedOptions]);

  return (
    <div className={classes.select} {...rest}>
      <div
        className={cx(classes.triggerDropdown, triggerDropdownClass)}
        onClick={() => setShowOption(!showOption)}
        ref={triggerDropdownRef}>
        <span className={cx('truncateElipsis', classes.selectedOptions)}>
          {selectedOptions.map((option) => option.label).join(', ')}
        </span>
        <DownIcon className={classes.downIcon} />
      </div>
      {showOption && (
        <div
          className={classes.optionsOverlay}
          ref={optionOverlayRef}
          style={{ width: overlayWidth }}>
          {searchable && (
            <Input wrapperClass={classes.inputWrapper} searchable onChange={handleOnSearch} />
          )}
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
