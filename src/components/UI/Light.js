import React from "react";
import classes from "./Light.module.css";
class Light extends React.Component {
  render() {
    return <div className={classes.light}>{this.props.children}</div>;
  }
}
export default Light;
