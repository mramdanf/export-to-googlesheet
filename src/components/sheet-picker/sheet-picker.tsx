import { ChangeEvent } from 'react';
import SheetTabSelector from './sheet-tab-selector';

import classes from './sheet-picker.module.css';
import { useFileChooser } from '@/store/fileChooserContext';

function SheetPicker() {
  const { setSelectedFile, selectedFile } = useFileChooser();

  function handleOnChangeFileInput(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setSelectedFile(selectedFiles?.[0]);
  }

  return (
    <>
      {!selectedFile && (
        <input className={classes.inputFile} type="file" onChange={handleOnChangeFileInput} />
      )}
      {selectedFile && <SheetTabSelector />}
    </>
  );
}

export default SheetPicker;
