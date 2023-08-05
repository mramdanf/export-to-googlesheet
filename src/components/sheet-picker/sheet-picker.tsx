import { ChangeEvent, useState } from 'react';
import SheetTabSelector from './sheet-tab-selector';

import classes from './sheet-picker.module.css';

function SheetPicker() {
  const [currentFile, setCurrentFile] = useState<File>();

  function handleOnChangeFileInput(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setCurrentFile(selectedFiles?.[0]);
  }

  return (
    <>
      {!currentFile && (
        <input className={classes.inputFile} type="file" onChange={handleOnChangeFileInput} />
      )}
      {currentFile && <SheetTabSelector file={currentFile} onSetCurrentFile={setCurrentFile} />}
    </>
  );
}

export default SheetPicker;
