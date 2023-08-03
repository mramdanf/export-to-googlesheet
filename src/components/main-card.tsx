import GSheetIcon from './icons/gsheet-icon';
import classes from './main-card.module.css';

function MainCard() {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <GSheetIcon />
        <p className={classes.cardHeaderText}>Export to Google Sheets</p>
      </div>
    </div>
  );
}

export default MainCard;
