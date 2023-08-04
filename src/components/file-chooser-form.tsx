import Select from './select/select';

import classes from './file-chooser-form.module.css';
import SheetPicker from './sheet-picker/sheet-picker';

function FileChooser() {
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
    </div>
  );
}

export default FileChooser;
