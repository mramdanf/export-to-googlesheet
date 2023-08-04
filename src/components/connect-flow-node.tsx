import Button from './button/button';
import classes from './connect-flow-node.module.css';
import DatabaseIcon from './icons/database-icon';
import { Content } from '@/types/app';

type ConnectFlowNodeProps = {
  onSetCurrContent: (val: Content) => void;
};

function ConnectFlowNode(props: ConnectFlowNodeProps) {
  return (
    <Button className={classes.button}>
      <div className={classes.buttonContent}>
        <DatabaseIcon /> Connect Flow Node to Import to Google Sheets
      </div>
    </Button>
  );
}

export default ConnectFlowNode;
