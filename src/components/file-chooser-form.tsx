import { useCallback, useEffect, useState } from 'react';
import { SelectOption } from '@/types/app';
import Select from './select/select';
import SheetPicker from './sheet-picker/sheet-picker';
import Button from './button/button';
import { getLastExportedTime, saveLastExportedTime } from '../utils/localstorage';
import { useFileChooser } from '@/store/fileChooserContext';

import classes from './file-chooser-form.module.css';

function FileChooser() {
  const [lastExport, setLastExport] = useState<string>('');
  const [selectedAccount, setSelectedAccount] = useState<SelectOption>();

  const { disableExport, selectedFile } = useFileChooser();

  function handleOnSetLastExport() {
    saveLastExportedTime();
    setLastExport(getLastExportedTime());
  }

  const handleOnSelectedAccount = useCallback((option: SelectOption) => {
    setSelectedAccount(option);
  }, []);

  useEffect(() => {
    const time = getLastExportedTime();
    if (time) {
      setLastExport(time);
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.formItem}>
        <label>Google Account</label>
        <Select
          type="single"
          options={[
            { value: 'default', label: 'Account Name' },
            { value: 'john.doe@gmail.com', label: 'John Doe' },
            { value: 'marisol@gmail.com', label: 'Marisol' }
          ]}
          onSelectedOption={handleOnSelectedAccount}
        />
      </div>
      {selectedAccount && (
        <div className={classes.formItem}>
          <label>File</label>
          <SheetPicker />
        </div>
      )}
      {selectedFile && (
        <Button
          className={classes.exportButton}
          category="primary"
          disabled={disableExport}
          onClick={handleOnSetLastExport}>
          Export
        </Button>
      )}
      {lastExport && <p className={classes.lastExportedTime}>{`Last export ${lastExport}`}</p>}
    </div>
  );
}

export default FileChooser;
