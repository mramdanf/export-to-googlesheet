import { useCallback, useEffect, useState } from 'react';
import Select from './select/select';
import SheetPicker from './sheet-picker/sheet-picker';
import Button from './button/button';
import { getLastExportedTime, saveLastExportedTime } from './main-card.utils';

import classes from './file-chooser-form.module.css';
import { SelectOption } from '@/types/app';

function FileChooser() {
  const [lastExport, setLastExport] = useState<string>('');
  const [selectedAccount, setSelectedAccount] = useState<SelectOption>();
  const [selectedFile, setSelectedFile] = useState<File>();

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
          <SheetPicker selectedFile={selectedFile} onSetSelectedFile={setSelectedFile} />
        </div>
      )}
      {selectedFile && (
        <Button category="primary" onClick={handleOnSetLastExport}>
          Export
        </Button>
      )}
      {lastExport && <p className={classes.lastExportedTime}>{`Last export ${lastExport}`}</p>}
    </div>
  );
}

export default FileChooser;
