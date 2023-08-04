import classes from './select.module.css';

function Select() {
  return (
    <select className={classes.select}>
      <option>Account Name</option>
      <option>john.doe@gmail.com</option>
      <option>marisol@gmail.com</option>
    </select>
  );
}

export default Select;
