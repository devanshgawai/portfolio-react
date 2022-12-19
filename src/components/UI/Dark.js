import classes from "./Dark.module.css";
const Dark = (props) => {
  return (
    <div className={`${classes.dark} ${props.className}`}>{props.children}</div>
  );
};
export default Dark;
