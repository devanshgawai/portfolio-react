import { Component } from "react";
import Light from "../UI/Light";
import Card from "../UI/Card";
import classes from "./Project.module.css";
class Project extends Component {
  render() {
    return (
      <Light>
        <section className={classes.projects} id="project">
          <article className={classes.heading}>
            <h2>Projects</h2>
          </article>
          <article className={classes.content}>
            {this.props.projects.map((proj, index) => (
              <Card className={classes.cardContent} key={index}>
                <h2>{proj.name}</h2>
                <p>{proj.techStack}</p>
                <p>{proj.description}</p>
              </Card>
            ))}
          </article>
        </section>
      </Light>
    );
  }
}
export default Project;
