import Button from '../button/button';
import CloseIcon from '../icons/close-icon';
import GSheetIcon from '../icons/gsheet-icon';
import Select from '../select/select';

import classes from './sheet-tab-selector.module.css';

type SheetTabSelectorProps = {
  file: File;
  onSetCurrentFile: (file?: File) => void;
};

function SheetTabSelector({ file, onSetCurrentFile }: SheetTabSelectorProps) {
  return (
    <div className={classes.tabSelector}>
      <GSheetIcon />
      <p>{file.name}</p>
      <div className={classes.buttonWrapper}>
        {/* <Button className={classes.tabSelect}>
          <span>Tab 1</span> <DownIcon />
        </Button> */}
        <Select
          triggerDropdownClass={classes.tabSelect}
          type="multiple"
          options={[
            { value: 'tab-1', label: 'Tab 1' },
            { value: 'tab-2', label: 'Tab 2' }
          ]}
        />
        <Button className={classes.removeFileButton} onClick={() => onSetCurrentFile(undefined)}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}

export default SheetTabSelector;
