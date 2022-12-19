import Dark from "../UI/Dark";
import classes from "./Hero.module.css";
import propic from "../../assets/images/propic.jpeg";
const Hero = (props) => {
  const [firstname, lastname] = props.name.split(" ");
  return (
    <Dark className={classes.hero}>
      <div className={classes.heroContent}>
        <h2>
          I'm <span>{firstname}</span> {lastname}
        </h2>
        <p className={classes.content}>{props.objective}</p>
      </div>
      <img src={propic} alt="profileimage" />
    </Dark>
  );
};
export default Hero;
