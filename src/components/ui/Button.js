import classes from './Button.module.scss';

function Button(props) {
  return <button className={classes.button}>{props.children}</button>;
}

export default Button;
