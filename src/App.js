import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";
import NavigationBar from "./components/UI/NavigationBar";

const devansh = {
  name: "Devansh Gawai",
  objective:
    "To work in a firm with a professional work driven environment where I can utilize and apply my knowledge and skill which would embrace me as a fresher to grow while fulfilling organization’s goal.",
  skills: [
    { skill: "HTML", percValue: "80" },
    { skill: "CSS", percValue: "80" },
    { skill: "Javascript", percValue: "70" },
    { skill: "React", percValue: "70" },
    { skill: "Python", percValue: "65" },
    { skill: "SQL", percValue: "71" },
  ],
  qualifications: {
    education: [
      {
        course: "Masters in Computer Science",
        college: "Fergusson College, Pune",
        cgpa: 9.35,
      },
      {
        course: "Bachelor's in Computer Science",
        college: "Sir Parshurambhau College, Pune",
        marks: 69.0,
      },
      {
        course: "10 + 2",
        college: "Sir Parshurambhau College, Pune",
        marks: 56.0,
      },
      {
        course: "SSC",
        college: "Bharti Vidyapeeth, Pune",
        marks: 77.8,
      },
    ],
    experience: [
      {
        internship: {
          name: "Internship at Docboyz, Pune (3 months) ",
          work: [
            "Consumed and created Credit Ratings API.",
            "Added some UI to effectively use the software without having the need of actual API documentations.",
            "Consumed more APIs such as for vaccine and telecom verifications.",
            "Fixing minor bugs in the system.",
          ],
        },
      },
    ],
    projects: [
      {
        name: "Cart (2021-22) ",
        techStack: "React.js, Redux, Redux Toolkit, HTML, CSS, Firebase. ",
        description:
          "Cart is a mini project which is basically an e-commerce website that allows the authenticated users to buy and sell tangible goods, digital products online. The app uses Redux Toolkit to manage the entire states of the app.",
      },
      {
        name: "Trouvaille (2021-22) ",
        techStack: " React.js, HTML, CSS, Firebase ",
        description:
          "Trouvaille is a React application which is developed for the bloggers where they can add blogs related to travel so the readers would be able to plan their next tours.",
      },
      {
        name: "Workplan (2021-22) ",
        techStack: "React.js, HTML, CSS, Firebase ",
        description:
          "Workplan is a React app which is great to be used for assigning the tasks. The app can be used by two types of the users (Admin and Employees). Both of them should register their accounts in the app. The Admin can assign tasks to the employees. Employees can view the assigned tasks on a daily basis. The app uses Firebase authentications to maintain the security of the users.",
      },
      {
        name: "2n it (2019-20)",
        techStack: "Python, HTML, CSS and MySQL ",
        description:
          "The system converts a normal image (jpg, jpeg, png) into a sketch form. To create a personalized sketch look, image-processing has been used. It also keeps the track of feedbacks given by the users to improve the software. ",
      },
      {
        name: "Questions Segregation System (2018-19)  ",
        techStack: " HTML, CSS, PHP and MySQL. ",
        description:
          "  The main objective of the system is to help the students by providing all the questions which was asked in the University Exam on one platform. The system provides the users to view markwise or year-wise questions which helps their time during exam period.",
      },
    ],
  },
};

function App() {
  return (
    <>
      <NavigationBar />
      <Hero name={devansh.name} objective={devansh.objective} />
      <Skills skills={devansh.skills} />
      <Resume
        education={devansh.qualifications.education}
        experience={devansh.qualifications.experience}
      />
      <Project projects={devansh.qualifications.projects} />
    </>
  );
}

export default App;
