/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import React from 'react';
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your filename for custom animation

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
  github: "https://github.com/ameerhamzabeliever",
  linkedin: "https://linkedin.com/in/ameer-hamza-2a203620b",
  gmail: "code.believers@gmail.com",
  whatsapp: "+923237426165",


  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "skills.title",
  subTitle: "skills.subtitle",
  skills: [
    "⚡ Design and develop high-quality mobile applications with smooth, responsive, and user-friendly interfaces",
    <React.Fragment key="build-apps">
      ⚡ Build apps that are:<br />
      &nbsp;&nbsp;✔ Based on strong, scalable ideas<br />
      &nbsp;&nbsp;✔ Visually appealing and engaging<br />
      &nbsp;&nbsp;✔ Functional and intuitive—just the way users expect
    </React.Fragment>,
    "⚡ Implement powerful features using technologies like Swift, Objective-C, SwiftUI, Flutter and Kotlin",
    "⚡ Integrate third-party services including Firebase (Firestore, Auth, Realtime DB, Storage), AWS, and custom REST APIs",
    "⚡ Follow modern architectures (MVVM, MVC, MVP, Clean Architecture) for scalable and maintainable codebases"
    // ... other skills ...
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "UIKit",
      fontAwesomeClassname: "fab fa-uikit"
    },
    {
      skillName: "SwiftUI",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Objective-C",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "MVC",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "MVVM",
      fontAwesomeClassname: "fas fa-th-large"
    },
    {
      skillName: "MVP",
      fontAwesomeClassname: "fab fa-hive"
    },

    {
      skillName: "Clean Architecture",
      fontAwesomeClassname: "fas fa-th"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fa-brands fa-flutter"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fa-brands fa-dart-lang"
    },
    {
      skillName: "SQLite",
      fontAwesomeClassname: "fa-solid fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "bi bi-filetype-sql"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fa-solid fa-fire-flame-curved"
    },
    {
      skillName: "In-App Purchases",
      fontAwesomeClassname: "fa-solid fa-cart-shopping"
    },
    {
      skillName: "App Submission",
      fontAwesomeClassname: "fab fa-app-store-ios"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fa-brands fa-github"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fa-brands fa-jira"
    },
    {
      skillName: "Azure DevOps",
      fontAwesomeClassname: "fa-brands fa-windows"
    },
    {
      skillName: "MS Office",
      fontAwesomeClassname: "fa-solid fa-file-word"
    },
    {
      skillName: "Agile",
      fontAwesomeClassname: "fa-solid fa-group-arrows-rotate"
    },
    {
      skillName: "TDD",
      fontAwesomeClassname: "fa-solid fa-arrows-spin"
    },



  ],
  display: true // Set false to hide this section, defaults to true
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
  title: "Mobile Development",
  icon: "📱",
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "iOS Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Android Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Flutter Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "45%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Leadership Stack
const leadershipStack = {
  title: "Leadership & Methodology",
  icon: "👥",
  experience: [
    {
      Stack: "Team Leadership",
      progressPercentage: "85%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Agile/Scrum",
      progressPercentage: "90%"
    },
    {
      Stack: "Code Review",
      progressPercentage: "85%"
    },
    {
      Stack: "Mentoring",
      progressPercentage: "75%"
    }
  ]
};

// Coding Philosophy Stack
const codingPhilosophyStack = {
  title: "Coding Philosophy",
  icon: "💡",
  experience: [
    {
      Stack: "Clean Code Principles",
      progressPercentage: "90%"
    },
    {
      Stack: "SOLID Principles",
      progressPercentage: "85%"
    },
    {
      Stack: "User-Centric Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Performance Optimization",
      progressPercentage: "85%"
    },
    {
      Stack: "Continuous Learning",
      progressPercentage: "95%"
    }
  ]
};

// Cross-Platform Stack
const crossPlatformStack = {
  title: "DevOps & Tools",
  icon: "🔄",
  experience: [
    {
      Stack: "Git/Version Control",
      progressPercentage: "95%"
    },
    {
      Stack: "Gradle",
      progressPercentage: "85%"
    },
    {
      Stack: "Azure CI/CD",
      progressPercentage: "80%"
    },
    {
      Stack: "Unit Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "GitHub Actions",
      progressPercentage: "75%"
    }
  ]
};

// App Publishing Stack
const appPublishingStack = {
  title: "App Publishing & Distribution",
  icon: "🚀",
  experience: [
    {
      Stack: "App Store Connect",
      progressPercentage: "90%"
    },
    {
      Stack: "Google Play Console",
      progressPercentage: "50%"
    },
    {
      Stack: "Beta Testing",
      progressPercentage: "85%"
    },
    {
      Stack: "App Store Optimization",
      progressPercentage: "75%"
    },
    {
      Stack: "Release Management",
      progressPercentage: "85%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Mobile Application Developer",
      company: "Joblogic",
      companylogo: require("./assets/images/jobLogic.png"),
      desc: "Joined as a Mid-Level iOS Developer, transitioned into a Senior Mobile Developer role",
      heading: "Key Responsibilities & Achievements",
      descBullets: [
        "Developed and maintained iOS app using Swift, Objective-C, MVVM, Clean Swift, and Core Data",
        "Worked on Flutter app using Dart, Clean Architecture, and GetX",
        "Maintained WebView module using HTML, CSS, JavaScript, and MVC",
        "Stabilized the app by fixing critical bugs and achieved a 100% crash-free experience in production",
        "Refactored 80% of the legacy Joblogic codebase, resolving critical crashes and bugs"
      ],
      toolsSection: {
        heading: "Tools & Skills Gained:",
        items: [
          "JIRA, Azure DevOps, Git",
          "SwiftUI (personal projects)",
          "Cross-platform and clean architecture expertise"
        ]
      }
    },
    {
      role: "iOS Application Developer",
      company: "YumyApps",
      companylogo: require("./assets/images/yamm.png"),
      desc: "Joined as a Mid-level iOS Developer, leading end-to-end app development—from initial build to App Store deployment, maintenance, and feature enhancements",
      heading: "Key Responsibilities & Achievements:",
      descBullets: [
        "Built and maintained iOS applications using Swift and UIKit",
        "Enhanced app functionality and resolved critical bugs to stabilize the product",
        "Set the foundation for a new product with clean architecture and reusable components",
        "Utilized Core Data for efficient local storage and persistence",
        "Applied MVVM and MVC architecture patterns for scalable code",
        "Collaborated with cross-functional teams for timely delivery and quality assurance",
      ]
    },
    {
      role: "iOS Application Developer ",
      company: "Vespert Tech",
      companylogo: require("./assets/images/Vespert Tech.png"),
      desc: "Began my iOS development career at Vespert Tech, responsible for building and maintaining iOS applications",
      heading: "Key Responsibilities & Achievements:",
      descBullets: [
       "Delivered over 15+ apps, helping startups grow and launch successfully",
        "Built and launched iOS apps from scratch using Swift, Objective-C, and UIKit",
        "Integrated key features like In-App Purchases, WebSockets, and Google AdMob",
        "Improved legacy codebases by adopting MVVM/MVC architecture and refactoring",
        "Collaborated in Agile teams with active participation in stand-ups and sprint planning",
        "Recognized as a top-performing team member for adding value to the company",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "projects.title",
  subtitle: "Startups and companies I’ve contributed to by building and shaping their technology from the ground up",
  projects: [
    {
      image: require("./assets/images/Joblogic_Project.png"),
      projectName: "projects.joblogic.name",
      projectDesc: "projects.joblogic.description",
      techStack: "Swift, Objective-C, MVVM, MVP, Clean Architecture, Core Data, SQLite, Flutter (Dart, Clean, GetX), Kotlin",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/pk/app/joblogic/id1084286430"
        },

      ]
    },
    {
      image: require("./assets/images/Jalsah_Project.png"),
      projectName: "projects.jalsah.name",
      projectDesc: "projects.jalsah.description",
      techStack: "Swift, MVVM, UIKit, Google AdMob, Custom Animations, In-App Purchases",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/pk/app/jalsah-جلسة/id1106410643"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Family Time_Project.png"),
      projectName: "projects.familytime.name",
      projectDesc: "projects.familytime.description",
      techStack: "Swift, Objective-C, MVC, In-App Purchases",
      footerLink: [
        {
          name: "View Project 1",
          url: "https://apps.apple.com/pk/app/familytime-parental-controls/id981066103"
        },
        {
          name: "View Project 2",
          url: "https://apps.apple.com/pk/app/familytime-jr/id1002010477"
        }
      ]
    },
    {
      image: require("./assets/images/Alfalah_Project.png"),
      projectName: "projects.alfalah.name",
      projectDesc: "projects.alfalah.description",
      techStack: "Swift, UIKit, Core Data, MVVM",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/pk/app/alfalah-quran-athan-prayer/id1631108236"
        },

      ]
    },
    {
      image: require("./assets/images/Get An Expert_Project.png"),
      projectName: "projects.getanexpert.name",
      projectDesc: "projects.getanexpert.description",
      techStack: "Swift, MVC, Firebase, Chat, Audio/Video Calls, Online Payment"
    },
    {
      image: require("./assets/images/Quokka_Project.png"),
      projectName: "projects.quokka.name",
      projectDesc: "projects.quokka.description",
      techStack: "Swift, UIKit, MVVM, Social logins, Custom Animations, WebSockets",
    },
    {
      image: require("./assets/images/doc Scanner_Project.png"),
      projectName: "projects.scanner.name",
      projectDesc: "projects.scanner.description",
      techStack: "Swift, MVC, Core Data",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/pk/app/scanner-app/id1291962681"
        },

      ]
    },
    {
      image: require("./assets/images/SKUScanner_Project.png"),
      projectName: "projects.skuscanner.name",
      projectDesc: "projects.skuscanner.description",
      techStack: "Swift, MVC, BarCodescanner, BarCode Generator, iOT",
    },
    {
      image: require("./assets/images/Community Maker_Project.png"),
      projectName: "projects.communitymaker.name",
      projectDesc: "projects.communitymaker.description",
      techStack: "Swift, UIKit, MVC, Deep Linking",
    },
    {
      image: require("./assets/images/Pisiffik.jpg"),
      projectName: "projects.pisiffik.name",
      projectDesc: "projects.pisiffik.description",
      techStack: "Swift, UIKit, MVVM, Google Maps, Stripe Integration",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/pk/app/pisiffik/id1637092101"
        },

      ]
    },
    {
      image: require("./assets/images/My360Key.jpg"),
      projectName: "projects.my360key.name",
      projectDesc: "projects.my360key.description",
      techStack: "Swift, MVVM, MapKit, NFC",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/pk/app/my360key/id6449696077"
        },

      ]
    },
    {
      image: require("./assets/images/LifeSign.webp"),
      projectName: "projects.lifesign.name",
      projectDesc: "projects.lifesign.description",
      techStack: "Swift, UIKit, MVC, Social Login SDKs, WebSockets",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/us/app/lifesign/id1499793115"
        },

      ]
    },
    {
      image: require("./assets/images/Flovso.png"),
      projectName: "projects.flovso.name",
      projectDesc: "projects.flovso.description",
      techStack: "Swift, UIKit, MVC",
      footerLink: [
        {
          name: "projects.viewProject",
          url: "https://apps.apple.com/pk/app/flovso/id1615357911"
        },

      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "achievements.cards.apple.title",
      subtitle: "achievements.cards.apple.subtitle",
      image: require("./assets/images/appleCertificate.png"),
      imageAlt: "Apple iOS Development Certificate"
    },
    {
      title: "achievements.cards.hackathon.title",
      subtitle: "achievements.cards.hackathon.subtitle",
      image: require("./assets/images/HackathonCertificate.png"),
      imageAlt: "Hackathon Winner Certificate"
    },
    {
      title: "achievements.cards.speaker.title",
      subtitle: "achievements.cards.speaker.subtitle",
      image: require("./assets/images/leaderCertificate.jpg"),
      imageAlt: "Leadership and Speaking Certificate"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "blogs.title",
  subtitle: "blogs.subtitle",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // These are only used when displayMediumBlogs is "false"
    // Add your own blog posts here if you want to use hardcoded blogs instead of Medium
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "talks.title",
  subtitle: emoji(
    "talks.subtitle"
  ),

  talks: [
    // Add your own talks here
    // Example:
    // {
    //   title: "Your Talk Title",
    //   subtitle: "Event name and date",
    //   slides_url: "https://your-slides-url.com",
    //   event_url: "https://your-event-url.com"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("podcast.title"),
  subtitle: "podcast.subtitle",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add your own podcast links here
    // Example: "https://anchor.fm/your-podcast/embed/episodes/your-episode"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "resume.title",
  subtitle: "resume.subtitle",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all",
  number: "+92 323 7426165",
  email_address: "code.believers@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace with your twitter username without @ symbol, or leave empty to disable
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Fast Facts Section
const statsSection = {
  title: "Fast Facts 📊",
  subtitle: "A quick snapshot of my career highlights, showcasing experience, achievements, and impact",
  display: true, // Set false to hide this section
  data: [
    {
      icon: "⏰",
      number: "6+",
      label: "Years Experience",
      labelKey: "yearsExperience"
    },
    {
      icon: "📋",
      number: "20+",
      label: "Projects Delivered",
      labelKey: "projectsDelivered"
    },
    {
      icon: "📈",
      number: "50%",
      label: "UX Improvement",
      labelKey: "uxImprovement"
    },
    {
      icon: "🤝",
      number: "15+",
      label: "Clients Collaborated With",
      labelKey: "clientsCollaborated"
    },
    {
      icon: "🤖",
      number: "2+",
      label: "AI Integrations",
      labelKey: "aiIntegrations"
    },
    {
      icon: "✅",
      number: "100%",
      label: "System Uptime",
      labelKey: "systemUptime"
    }
  ]
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  leadershipStack,
  codingPhilosophyStack,
  crossPlatformStack,
  appPublishingStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  statsSection
};
