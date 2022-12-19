import classes from "./NavigationBar.module.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <nav className={classes.nav}>
      <article className={classes.heading}>
        <h2>DG</h2>
        <FontAwesomeIcon
          icon={faBars}
          transform="left-15"
          className={classes.fabars}
        />
      </article>
      <ul className={classes.links}>
        <li>
          <Link to="skills" smooth={true} offset={-20} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} offset={-20} duration={500}>
            Qualifications & Experience
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} offset={-20} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
      <article className={classes["social-links"]}>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          +919405754153/+918208892759
        </p>
      </article>
    </nav>
  );
};
export default NavigationBar;
