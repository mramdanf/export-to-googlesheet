import GoogleLogoIcon from './icons/google-logo-icon';

import classes from './connect-to-google-account.module.css';
import Button from './button';

function ConnectToGoogleAccount() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <GoogleLogoIcon />
        <div className={classes.descriptionText}>
          <p>Connect Google Account</p>
          <p>Please connect Google Account to use this block</p>
        </div>
      </div>
      <Button>Connect</Button>
    </div>
  );
}

export default ConnectToGoogleAccount;
