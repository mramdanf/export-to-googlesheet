import Select from './select/select';

import classes from './file-chooser.module.css';

function FileChooser() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.formItem}>
        <label>Google Account</label>
        <Select />
      </div>
      <div className={classes.formItem}>
        <label>File</label>
        <Select />
      </div>
    </div>
  );
}

export default FileChooser;
