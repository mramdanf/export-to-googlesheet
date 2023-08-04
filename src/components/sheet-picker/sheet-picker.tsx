import { ChangeEvent, useState } from 'react';
import classes from './sheet-picker.module.css';
import SheetTabSelector from './sheet-tab-selector';

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
