import { useState } from 'react';
import ConnectToGoogleAccount from './connect-to-google-account';
import { Content } from '@/types/app';
import DeleteIcon from './icons/delete-icon';
import GSheetIcon from './icons/gsheet-icon';
import ConnectFlowNode from './connect-flow-node';
import FileChooser from './file-chooser-form';
import Button from './button/button';

import classes from './main-card.module.css';

function MainCard() {
  const [currContent, setCurrContent] = useState<Content>('connect-google');

  function handleDeleteBlock() {
    if (currContent === 'connect-google') {
      return;
    }
    setCurrContent('connect-flow-node');
  }

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.gsheetIcon}>
          <GSheetIcon />
        </div>
        <p className={classes.headerText}>Export to Google Sheets</p>
        <Button className={classes.deleteButton} onClick={handleDeleteBlock}>
          <DeleteIcon />
        </Button>
      </div>
      {currContent === 'connect-google' && (
        <ConnectToGoogleAccount onSetCurrContent={setCurrContent} />
      )}
      {currContent === 'connect-flow-node' && <ConnectFlowNode onSetCurrContent={setCurrContent} />}
      {currContent === 'file-chooser' && <FileChooser />}
    </div>
  );
}

export default MainCard;
