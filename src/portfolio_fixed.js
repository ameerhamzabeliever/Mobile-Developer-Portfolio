/* Change this file to get your personal Portfolio */

import React from "react";
import emoji from "react-easy-emoji";

// Skills Section

const skillsSection = {
  title: "skills.title",
  subTitle: "skills.subtitle",
  skills: [
    "skills.skill1",
    <React.Fragment key="build-apps">
      ⚡ Build apps that are:<br /><br />
      ✔ Based on strong, scalable ideas<br /><br />
      ✔ Visually appealing and engaging<br /><br />
      ✔ Functional and intuitive—just the way users expect
    </React.Fragment>,
    "skills.skill3",
    "skills.skill4",
    "skills.skill5"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Change theme colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ameer Hamza",
  title: "greeting.title",
  subTitle: emoji(
    "greeting.subtitle"
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1iH2vXy6HeWk231doQlhw1Yuw7kSZT3Dm", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "education.university",
      logo: require("./assets/images/sargodha.jpeg"),
      subHeader: "education.degree",
      duration: "education.duration"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "workExperience.role1",
      company: "workExperience.company1",
      companylogo: require("./assets/images/Vespert Tech.png"),
      date: "workExperience.date1",
      desc: "workExperience.desc1",
      descBullets: [
        "workExperience.descBullets1.bullet1",
        "workExperience.descBullets1.bullet2"
      ]
    },
    {
      role: "workExperience.role2",
      company: "workExperience.company2",
      companylogo: require("./assets/images/Joblogic_Project.png"),
      date: "workExperience.date2",
      desc: "workExperience.desc2",
      descBullets: [
        "workExperience.descBullets2.bullet1",
        "workExperience.descBullets2.bullet2"
      ]
    },
    {
      role: "workExperience.role3",
      company: "workExperience.company3",
      companylogo: require("./assets/images/yamm.png"),
      date: "workExperience.date3",
      desc: "workExperience.desc3",
      descBullets: [
        "workExperience.descBullets3.bullet1",
        "workExperience.descBullets3.bullet2"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Repositories
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "projects.title",
  subtitle: "projects.subtitle",
  projects: [
    {
      image: require("./assets/images/Alfalah_Project.png"),
      projectName: "projects.project1.name",
      projectDesc: "projects.project1.desc",
      footerLink: [
        {
          name: "projects.project1.link1",
          url: "http://nextu.se/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Community Maker_Project.png"),
      projectName: "projects.project2.name",
      projectDesc: "projects.project2.desc",
      footerLink: [
        {
          name: "projects.project2.link1",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("achievements.title"),
  subtitle: "achievements.subtitle",

  achievementsCards: [
    {
      title: "achievements.achievement1.title",
      subtitle: "achievements.achievement1.subtitle",
      image: require("./assets/images/HackathonCertificate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "achievements.achievement1.link1",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "achievements.achievement1.link2",
          url: "https://codein.withgoogle.com/dashboard/project_submissions/75510691/assignment/5593411853991936/"
        },
        {
          name: "achievements.achievement1.link3",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "achievements.achievement2.title",
      subtitle: "achievements.achievement2.subtitle",
      image: require("./assets/images/leaderCertificate.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "achievements.achievement2.link1",
          url: "https://assistant.google.com/services/a/uid/000000c2b1bb0b4f?hl=en"
        }
      ]
    },

    {
      title: "achievements.achievement3.title",
      subtitle: "achievements.achievement3.subtitle",
      image: require("./assets/images/appleCertificate.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "achievements.achievement3.link1", url: ""},
        {
          name: "achievements.achievement3.link2",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less than 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("contact.title"),
  subtitle: "contact.subtitle",
  number: "+1-647-573-2151",
  email_address: "ameerhamza9920@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
