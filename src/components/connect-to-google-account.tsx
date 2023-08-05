import GoogleLogoIcon from './icons/google-logo-icon';

import Button from './button/button';
import { Content } from '@/types/app';

import classes from './connect-to-google-account.module.css';

type ConnectToGoogleAccountProps = {
  onSetCurrContent: (val: Content) => void;
};

function ConnectToGoogleAccount(props: ConnectToGoogleAccountProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <div className={classes.googleLogoWrapper}>
          <GoogleLogoIcon className={classes.googleLogo} />
        </div>
        <div className={classes.descriptionText}>
          <p>Connect Google Account</p>
          <p>Please connect Google Account to use this block</p>
        </div>
      </div>
      <Button category="primary" onClick={() => props.onSetCurrContent('connect-flow-node')}>
        Connect
      </Button>
    </div>
  );
}

export default ConnectToGoogleAccount;
