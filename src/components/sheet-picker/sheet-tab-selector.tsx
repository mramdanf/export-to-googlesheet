import { useFileChooser } from '@/store/fileChooserContext';
import cx from 'classnames';
import Button from '../button/button';
import CloseIcon from '../icons/close-icon';
import GSheetIcon from '../icons/gsheet-icon';
import Select from '../select/select';

import classes from './sheet-tab-selector.module.css';

function SheetTabSelector() {
  const { selectedFile, setSelectedFile, setDisableExport } = useFileChooser();
  return (
    <div className={classes.tabSelector}>
      <GSheetIcon />
      <p className={cx('truncateElipsis', classes.fileName)}>{selectedFile?.name}</p>
      <div className={classes.buttonWrapper}>
        <Select
          triggerDropdownClass={classes.tabSelect}
          type="multiple"
          searchable
          options={[
            { value: 'tab-1', label: 'Tab 1' },
            { value: 'tab-2', label: 'Tab 2' },
            { value: 'tab-3', label: 'Tab 3' },
            { value: 'tab-4', label: 'Tab 4' },
            { value: 'tab-5', label: 'Tab 5' }
          ]}
          onDropdownVisibleChange={(open) => setDisableExport(open)}
        />
        <Button className={classes.removeFileButton} onClick={() => setSelectedFile(undefined)}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}

export default SheetTabSelector;
