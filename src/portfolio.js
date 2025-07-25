/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import React from 'react';
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
  title: "Hi all, I'm Hamza",
  subTitle: emoji(
    "A passionate Senior Mobile Application Developer with a strong background in building high-quality mobile apps. I specialize in developing seamless, scalable applications using Swift, UIKit, Objective-C, SwiftUI, Kotlin, and Dart. From crafting intuitive user interfaces to implementing complex backend integrations, I focus on delivering robust iOS and Android solutions that provide real value"
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
  title: "What I do",
  subTitle: "Curious Mobile Developer Always Ready to Dive into the Next Big Thing",
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
      schoolName: "University of Sargodha",
      logo: require("./assets/images/sargodha.jpeg"),
      subHeader: "Bachelor in Computer Science",
      duration: "(October 2017 - June 2021)"
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
      Stack: "iOS Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Android Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Flutter Development",
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
  title: "My Projects",
  subtitle: "Startups and companies I’ve contributed to by building and shaping their technology from the ground up",
  projects: [
    {
      image: require("./assets/images/Joblogic_Project.png"),
      projectName: "Joblogic",
      projectDesc: "Field service management software suite for SaaS",
      techStack: "Swift, Objective-C, MVVM, MVP, Clean Architecture, Core Data, SQLite, Flutter (Dart, Clean, GetX), Kotlin",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/pk/app/joblogic/id1084286430"
        },

      ]
    },
    {
      image: require("./assets/images/Jalsah_Project.png"),
      projectName: "Jalsah",
      projectDesc: "Social interaction app for real-time chatting, interactive challenges, and games",
      techStack: "Swift, MVVM, UIKit, Google AdMob, Custom Animations, In-App Purchases",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/pk/app/jalsah-جلسة/id1106410643"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Family Time_Project.png"),
      projectName: "FamilyTime",
      projectDesc: "Parental control app with monitoring and blocking capabilities",
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
      projectName: "Alfalah",
      projectDesc: "Islamic lifestyle app featuring Quran, prayers, duas, Qibla direction, and Islamic calendar",
      techStack: "Swift, UIKit, Core Data, MVVM",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/pk/app/alfalah-quran-athan-prayer/id1631108236"
        },

      ]
    },
    {
      image: require("./assets/images/Get An Expert_Project.png"),
      projectName: "Get An Expert",
      projectDesc: "Service marketplace app connecting providers and clients",
      techStack: "Swift, MVC, Firebase, Chat, Audio/Video Calls, Online Payment"
    },
    {
      image: require("./assets/images/Quokka_Project.png"),
      projectName: "Quokka",
      projectDesc: "Social matchmaking app for one-minute voice calls",
      techStack: "Swift, UIKit, MVVM, Social logins, Custom Animations, WebSockets",
    },
    {
      image: require("./assets/images/doc Scanner_Project.png"),
      projectName: "Scanner App",
      projectDesc: "Document scanning, editing, and PDF generation utility",
      techStack: "Swift, MVC, Core Data",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/pk/app/scanner-app/id1291962681"
        },

      ]
    },
    {
      image: require("./assets/images/SKUScanner_Project.png"),
      projectName: "SKU Scanner",
      projectDesc: "An inventory management application that allows users to manage stock, generate and scan barcodes, maintain records, and create detailed reports for tracking and analysis",
      techStack: "Swift, MVC, BarCodescanner, BarCode Generator, iOT",
    },
    {
      image: require("./assets/images/Community Maker_Project.png"),
      projectName: "Community Maker",
      projectDesc: "Social app enabling users to post help requests within local communities",
      techStack: "Swift, UIKit, MVC, Deep Linking",
    },
    {
      image: require("./assets/images/Pisiffik.jpg"),
      projectName: "Pisiﬃk",
      projectDesc: "Modern e-commerce app with online grocery shopping, in-store pickup, home delivery, and a built-in loyalty rewards system",
      techStack: "Swift, UIKit, MVVM, Google Maps, Stripe Integration",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/pk/app/pisiffik/id1637092101"
        },

      ]
    },
    {
      image: require("./assets/images/My360Key.jpg"),
      projectName: "My 360 Key",
      projectDesc: "App for real-time discovery of nearby shops with map-based navigation and smart door unlocking using MapKit and smart lock APIs",
      techStack: "Swift, MVVM, MapKit, NFC",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/pk/app/my360key/id6449696077"
        },

      ]
    },
    {
      image: require("./assets/images/LifeSign.webp"),
      projectName: "Life Sign",
      projectDesc: "A secure, communication-focused mobile app with real-time messaging to help users stay connected with friends and family through private, instant conversations",
      techStack: "Swift, UIKit, MVC, Social Login SDKs, WebSockets",
      footerLink: [
        {
          name: "View Project",
          url: "https://apps.apple.com/us/app/lifesign/id1499793115"
        },

      ]
    },
    {
      image: require("./assets/images/Flovso.png"),
      projectName: "Flovso App",
      projectDesc: "A social platform for the fashion industry, enabling users to share opinions, engage in discussions, and get community feedback on trends, brands, and designers—featuring user-generated content, likes, comments",
      techStack: "Swift, UIKit, MVC",
      footerLink: [
        {
          name: "View Project",
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
  title: emoji("Achievements And Certifications 🏆 "),
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
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // These are only used when displayMediumBlogs is "false"
    // Add your own blog posts here if you want to use hardcoded blogs instead of Medium
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
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add your own podcast links here
    // Example: "https://anchor.fm/your-podcast/embed/episodes/your-episode"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

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
  isHireable,
  resumeSection
};
