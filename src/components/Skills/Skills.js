import Light from "../UI/Light";
import Progressbar from "../UI/Progressbar";
import classes from "./Skills.module.css";
import React from "react";
const About = React.forwardRef((props, ref) => {
  return (
    <Light>
      <div className={classes.skills} id="skills">
        <article className={classes.heading}>
          <h2>Skills</h2>
        </article>
        <article className={classes.content}>
          {props.skills.map((skill, index) => (
            <article key={index}>
              <h4>{skill.skill}</h4>
              <Progressbar
                className={classes["skill-value"]}
                width={`${skill.percValue}%`}
              />
            </article>
          ))}
        </article>
      </div>
    </Light>
  );
});
export default About;
