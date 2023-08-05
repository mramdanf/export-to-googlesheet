import { useEffect, useState } from 'react';
import Select from './select/select';
import SheetPicker from './sheet-picker/sheet-picker';
import Button from './button/button';
import { getLastExportedTime, saveLastExportedTime } from './main-card.utils';

import classes from './file-chooser-form.module.css';

function FileChooser() {
  const [lastExport, setLastExport] = useState<string>('');

  function handleOnSetLastExport() {
    saveLastExportedTime();
    setLastExport(getLastExportedTime());
  }

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
            { value: 'defaul', label: 'Account Name' },
            { value: 'john.doe@gmail.com', label: 'John Doe' },
            { value: 'marisol@gmail.com', label: 'Marisol' }
          ]}
        />
      </div>
      <div className={classes.formItem}>
        <label>File</label>
        <SheetPicker />
      </div>
      <Button category="primary" onClick={handleOnSetLastExport}>
        Export
      </Button>
      {lastExport && <p className={classes.lastExportedTime}>{`Last export ${lastExport}`}</p>}
    </div>
  );
}

export default FileChooser;
