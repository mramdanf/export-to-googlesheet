import { ChangeEvent } from 'react';
import SheetTabSelector from './sheet-tab-selector';

import classes from './sheet-picker.module.css';
import { useFileChooser } from '@/store/fileChooserContext';
import Input from '../input/input';

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
        <Input className={classes.inputFile} type="file" onChange={handleOnChangeFileInput} />
      )}
      {selectedFile && <SheetTabSelector />}
    </>
  );
}

export default SheetPicker;
