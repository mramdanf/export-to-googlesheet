import GoogleLogoIcon from './icons/google-logo-icon';

import classes from './connect-to-google-account.module.css';
import Button from './button/button';
import { Content } from '@/types/app';

type ConnectToGoogleAccountProps = {
  onSetCurrContent: (val: Content) => void;
};

function ConnectToGoogleAccount(props: ConnectToGoogleAccountProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <GoogleLogoIcon />
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
