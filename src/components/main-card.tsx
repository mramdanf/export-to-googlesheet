import { useState } from 'react';
import ConnectToGoogleAccount from './connect-to-google-account';
import DeleteIcon from './icons/delete-icon';
import GSheetIcon from './icons/gsheet-icon';
import classes from './main-card.module.css';
import ConnectFlowNode from './connect-flow-node';
import { Content } from '@/types/app';
import FileChooser from './file-chooser';

function MainCard() {
  const [currContent, setCurrContent] = useState<Content>('connect-google');
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <GSheetIcon />
        <p className={classes.cardHeaderText}>Export to Google Sheets</p>
        <div className={classes.cardHeaderDeleteIcon}>
          <DeleteIcon />
        </div>
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
