import Card from "../UI/Card";
import Dark from "../UI/Dark";
import classes from "./Resume.module.css";
const Resume = (props) => {
  return (
    <Dark>
      <section className={classes.resume} id="resume">
        <article className={classes.heading}>
          <h2>Qualifications & Internships</h2>
        </article>
        <div className={classes.content}>
          <article className={classes.qualification}>
            <h2>Education</h2>
            {props.education.map((edu, index) => (
              <Card key={index}>
                <h3>{edu.course}</h3>
                <address>{edu.college}</address>
                <p>
                  {edu.marks
                    ? "Percentage: " + edu.marks.toFixed(2) + "%"
                    : "CGPA: " + edu.cgpa}
                </p>
              </Card>
            ))}
          </article>
          <article className={classes.experience}>
            <h2>Experience</h2>
            {props.experience.map((exp, index) => (
              <Card key={index}>
                <h3>{exp.internship.name}</h3>
                <address>
                  {exp.internship.work.map((work) => (
                    <li style={{ lineHeight: "2" }}>{work}</li>
                  ))}
                </address>
              </Card>
            ))}
          </article>
        </div>
      </section>
    </Dark>
  );
};
export default Resume;
