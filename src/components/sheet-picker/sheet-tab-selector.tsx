import Button from '../button/button';
import CloseIcon from '../icons/close-icon';
import GSheetIcon from '../icons/gsheet-icon';

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
      <Button className={classes.removeFileButton} onClick={() => onSetCurrentFile(undefined)}>
        <CloseIcon />
      </Button>
    </div>
  );
}

export default SheetTabSelector;
