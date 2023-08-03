import classes from './button.module.css';

function Button({ children }: { children: string }) {
  return <button className={classes.button}>{children}</button>;
}

export default Button;
