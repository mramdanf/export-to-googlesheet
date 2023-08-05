import { ChangeEvent } from 'react';
import SheetTabSelector from './sheet-tab-selector';

import classes from './sheet-picker.module.css';

type SheetPickerProps = {
  selectedFile?: File;
  onSetSelectedFile: (file?: File) => void;
};

function SheetPicker({ selectedFile, onSetSelectedFile }: SheetPickerProps) {
  function handleOnChangeFileInput(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    onSetSelectedFile(selectedFiles?.[0]);
  }

  return (
    <>
      {!selectedFile && (
        <input className={classes.inputFile} type="file" onChange={handleOnChangeFileInput} />
      )}
      {selectedFile && (
        <SheetTabSelector file={selectedFile} onSetCurrentFile={onSetSelectedFile} />
      )}
    </>
  );
}

export default SheetPicker;
