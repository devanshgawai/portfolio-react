import classes from "./Progressbar.module.css";
const Progressbar = (props) => {
  return (
    <div className={classes.progress}>
      <div
        style={{
          backgroundColor: "#edc531",
          width: props.width,
          height: "100%",
          borderRadius: "100%",
        }}
      ></div>
    </div>
  );
};
export default Progressbar;
