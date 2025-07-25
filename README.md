# Mobile Developer Portfolio ⚡️ 

## A clean, beautiful and responsive portfolio template for Mobile Developers!

<p align="center">
  <kbd>
<img src="https://user-images.githubusercontent.com/53429438/106779355-e9cd9e80-666c-11eb-9417-8a4b54441bc6.gif"></img>
  </kbd>
</p>

This is a customized version of the popular developerFolio template, specifically tailored for mobile application developers. Just change `src/portfolio.js` to get your personal portfolio. Customize portfolio theme by using your own color scheme globally in the  `src/_globalColor.scss` file.

## ✨ Latest Updates

🆕 **Enhanced Achievements Section**: Beautiful 2-column grid layout with taller images and professional card design  
🌍 **Full Localization**: Complete English and French translations with react-i18next  
🎨 **Improved Visual Design**: Optimized image sizing, hover effects, and responsive layouts  
📱 **Mobile-First Design**: Perfect responsive experience across all devices  
🏆 **Professional Showcase**: Clean achievement cards without buttons for better focus on content  

## About This Portfolio

This portfolio showcases the work of **Ameer Hamza**, a Senior Mobile Application Developer specializing in:
- **iOS Development**: Swift, UIKit, SwiftUI, Objective-C
- **Android Development**: Kotlin, Java
- **Cross-Platform**: Flutter, Dart
- **Architecture Patterns**: MVVM, MVC, MVP, Clean Architecture
- **Backend Integration**: Firebase, AWS, REST APIs

## Table of Contents
- [Portfolio Sections](#portfolio-sections)
- [Featured Projects](#featured-projects)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Achievements Section Implementation](#achievements-section-implementation)
- [Localization Support](#localization-support)
- [Linking portfolio to GitHub](#linking-portfolio-to-github)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contact Information](#contact-information)

## Portfolio Sections
✔️ Summary and About me\
✔️ Mobile Development Skills (iOS, Android, Flutter)\
✔️ Education (Computer Science - University of Sargodha)\
✔️ Work Experience (Senior Mobile Developer at Joblogic, iOS Developer at YumyApps & Vespert Tech)\
✔️ Open Source Projects Connected with GitHub\
✔️ Mobile App Projects (15+ Published Apps)\
✔️ **Achievements And Certifications 🏆** *(Enhanced with professional design)*\
✔️ Contact Information\
✔️ Resume Download\
✔️ GitHub Profile\
✔️ **Full Localization Support** *(English and French)*\
✔️ **Dark/Light Mode Support**\
✔️ **Responsive Design** *(Mobile-first approach)*

## Featured Projects
- **Joblogic**: Field service management SaaS platform
- **Jalsah**: Social interaction app with real-time chat and games  
- **FamilyTime**: Parental control applications
- **Alfalah**: Islamic lifestyle app with Quran and prayer features
- **Pisiffik**: E-commerce app with grocery delivery
- **Scanner App**: Document scanning and PDF generation utility
- **SKU Scanner**: Inventory management with barcode scanning
- **My 360 Key**: Smart door unlocking with NFC technology
- **And many more mobile applications...**


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```


## How To Use 

From your command line, clone and run this mobile developer portfolio:

```bash
# Clone this repository
git clone https://github.com/ameerhamzabeliever/Mobile-Developer-Portfolio.git

# Go into the repository
cd Mobile-Developer-Portfolio

# Setup default environment variables
# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Linking Portfolio to GitHub

Generate a classic GitHub personal access token following these [instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic) (make sure you don't select any scope just generate a simple token). If you are using [GitHub Actions](#configuring-github-actions-recommended) to deploy your portfolio you can skip this section.

1. Create a file called .env in the root directory of your project (if not done already in section: [How To Use](#how-to-use))

Note: Configuring environment variables before deploying your portfolio is highly recommended as some components depend on API data. 

```bash
- Mobile-Developer-Portfolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your GitHub token like this, also add your username as `GITHUB_USERNAME`

```env
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "ameerhamzabeliever"
USE_GITHUB_DATA = "true"
```

Set `showGithubProfile` to true or false to show Contact Profile using GitHub, defaults to false.

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

Note: Open Source Projects section only show pinned items of your GitHub.
If you are seeing something as shown below, follow these [instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile).

![ERROR](https://i.imgur.com/Hj6mu1K.png)

If the above solution still doesn't work, visit the [wiki page](https://github.com/saadpasta/developerFolio/wiki/Github-Setup-For-Open-Source-Projects).

## Linking blogs section to Medium

Optionally, you can link the blogs section to your medium user account:

* Inside the .env file, add key `MEDIUM_USERNAME` and assign your Medium username

```env
// .env
MEDIUM_USERNAME = "YOUR MEDIUM USERNAME"
```

* For Github Action, change the environment variable `MEDIUM_USERNAME` in `.github/workflows/deploy.yml`

Set `displayMediumBlogs` to true or false in portofolio.js to display fetched Medium blogs, defaults to true.

## Customization Guide

### Personalize page content in `/src/portfolio.js` & modify it as per your need. You will also need to modify `index.html` to change the title and metadata to provide accurate SEO for your personal portfolio.

```javascript
/* Change this file to get your Personal Mobile Developer Portfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all, I'm Hamza",
  subTitle: emoji("A passionate Senior Mobile Application Developer 🚀"),
  resumeLink: "https://drive.google.com/uc?export=download&id=1iH2vXy6HeWk231doQlhw1Yuw7kSZT3Dm"
};

const socialMediaLinks = {
  /* Your Social Media Links */
  github: "https://github.com/ameerhamzabeliever",
  linkedin: "https://linkedin.com/in/ameer-hamza-2a203620b",
  gmail: "code.believers@gmail.com",
  whatsapp: "+923237426165"
};

const skillsSection = { 
  /* Mobile Development Skills */
  title: "What I do",
  skills: [
    "⚡ Design and develop high-quality mobile applications",
    "⚡ iOS Development with Swift, UIKit, SwiftUI, Objective-C",
    "⚡ Android Development with Kotlin and Java",
    "⚡ Cross-platform development with Flutter and Dart",
    "⚡ Backend integration with Firebase, AWS, and REST APIs"
  ]
}

const workExperience = { 
  /* Your Mobile Development Experience */
  experience: [
    {
      role: "Senior Mobile Application Developer",
      company: "Joblogic",
      // ... more details
    }
  ]
}

const bigProjects = { 
  /* Your Mobile App Projects */
  projects: [
    {
      projectName: "Joblogic",
      projectDesc: "Field service management software suite for SaaS",
      techStack: "Swift, Objective-C, MVVM, Flutter, Kotlin"
    }
    // ... more projects
  ]
}

```
#### Resume Upload
To update your resume:
1. **Option 1 (Recommended)**: Use Google Drive link in `portfolio.js`:
   ```javascript
   resumeLink: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
   ```
   Make sure your Google Drive file is set to "Anyone with the link can view"

2. **Option 2**: Upload PDF to `public` folder:
   - Place your resume PDF in the `public` folder as `resume.pdf`
   - Update `portfolio.js`: `resumeLink: "/resume.pdf"`

#### Mobile App Screenshots
To showcase your mobile apps:
1. Add app screenshots to `src/assets/images/`
2. Update the `bigProjects` section in `portfolio.js` with your app details
3. Include App Store/Play Store links in the `footerLink` array 

#### Achievements and Certifications 🏆

The achievements section has been completely redesigned with a professional, modern layout:

**Features:**
- ✨ **2-Column Grid Layout**: Displays achievements in an elegant rectangular grid
- 🖼️ **Enhanced Image Display**: Taller images (280px) that fill the card borders completely
- 🎨 **Professional Card Design**: Clean cards with hover effects and gradient accents
- 📱 **Fully Responsive**: Adapts to 1-column layout on mobile devices
- 🌍 **Localization Ready**: Full support for multiple languages
- 🎯 **Clean Focus**: No footer buttons - pure content focus

**Configuration in `portfolio.js`:**
```javascript
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "achievements.cards.apple.title", // Localization key
      subtitle: "achievements.cards.apple.subtitle", // Localization key
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
  display: true
};
```

**Implementation Details:**
- **Images**: 280px height on desktop, 250px on tablet, 220px on mobile
- **Cards**: Minimum 500px height with flexible content area
- **Hover Effects**: Smooth image scaling and shadow transitions
- **Border Fitting**: Images extend fully to card edges with negative margins
- **Accessibility**: Proper alt text and semantic HTML structure

**Adding Your Achievements:**
1. Add certificate/achievement images to `src/assets/images/`
2. Update translation files in `src/locales/en/` and `src/locales/fr/`
3. Configure the `achievementsCards` array with your data
4. Images should be high-quality (minimum 400x280px) for best results

**Responsive Breakpoints:**
- **Desktop (>1024px)**: 2-column grid, 280px image height
- **Tablet (768-1024px)**: 2-column grid, 250px image height  
- **Mobile (<768px)**: 1-column layout, 220px image height

For a complete implementation guide that can be used in other projects, see: `ACHIEVEMENTS_IMPLEMENTATION.md`

## Localization Support 🌍

This portfolio includes comprehensive internationalization support:

**Supported Languages:**
- 🇺🇸 **English (en)** - Default language
- 🇫🇷 **French (fr)** - Complete French translation

**Features:**
- 🔄 **Language Switcher**: Toggle between EN/FR in the header
- 💾 **Persistent Preference**: Language choice saved in localStorage
- 🌐 **Auto-Detection**: Browser language detection on first visit
- 📝 **Complete Translation**: All sections fully localized including achievements

**Translation Structure:**
```
src/locales/
├── en/translation.json    # English translations
└── fr/translation.json    # French translations
```

**Adding New Languages:**
1. Create translation file: `src/locales/[lang-code]/translation.json`
2. Add language to `src/i18n.js` resources
3. Update language switcher component
4. Translate achievement content in the new language file

**Key Sections Localized:**
- Navigation menu
- Greeting and summary
- Skills and expertise
- Work experience
- Education details
- Achievement cards (titles and descriptions)
- Contact information
- All UI text and buttons 

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

#### Customize Lottie Animations

You can choose a Lottie and download it in json format from sites like [this](https://lottiefiles.com/). In `src/assets/lottie`, replace the Lottie json file you want to alter with the same file name. If you want to change the Lottie options, go to `src/components/displayLottie/DisplayLottie.js` and change the `defaultOptions` object, you can refer [lottie-react docs](https://www.npmjs.com/package/lottie-react) for more info on the `defaultOptions` object.

#### Adding Social Media Links
This portfolio includes mobile developer specific social media integrations:

```javascript
const socialMediaLinks = {
  github: "https://github.com/ameerhamzabeliever",
  linkedin: "https://linkedin.com/in/ameer-hamza-2a203620b", 
  gmail: "code.believers@gmail.com",
  whatsapp: "+923237426165", // WhatsApp for direct contact
  // You can also add:
  // instagram: "your_instagram_handle",
  // twitter: "your_twitter_handle"
};
```

## Mobile Development Focus 🚀

This portfolio is specifically optimized for mobile developers and includes:

### Skills Section
- **iOS Development**: Swift, UIKit, SwiftUI, Objective-C
- **Android Development**: Kotlin, Java
- **Cross-Platform**: Flutter, Dart, React Native
- **Architecture Patterns**: MVVM, MVC, MVP, Clean Architecture
- **Backend Services**: Firebase, AWS, REST APIs
- **Development Tools**: Xcode, Android Studio, Git, JIRA

### Project Showcase
- App Store and Play Store links
- Technology stack for each project
- Screenshots and descriptions
- Development methodologies used

### Professional Experience
- Mobile-specific roles and responsibilities
- Apps published and their impact
- Team collaboration in mobile development
- Agile/Scrum methodologies

## Deployment
When you are done with the setup, you should host your website online.
We highly recommend to read through the [Deploying on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Configuring GitHub Actions (Recommended)
First you should enable, GitHub Actions for the repository you use.

The Profile and the Repository information from GitHub is only created at the time of deploy and the site needs to be redeployed if those information needs to be updated. So, a configurable [CRON Job](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) is setup which deploys your site every week, so that once you update your profile on GitHub it is shown on your portfolio. You can also trigger it manually using `workflow_dispatch` event, see [this guide](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch) on how to do that.

- When you are done with the configuration, we highly recommend to read through the [GitHub Actions Configuring a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) docs.

#### Deploying to GitHub Pages

This section guides you to deploy your mobile developer portfolio on GitHub pages.

- Navigate to `package.json` and enter your domain name instead of the default homepage in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/Mobile-Developer-Portfolio`, add the same to the homepage section of `package.json`.

- You can also add `/Mobile-Developer-Portfolio` to `package.json`. Upon doing so, you tell `create-react-app` to add the path assets accordingly.

- Optionally, configure a custom domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).

#### Deploying to Netlify

You can also host your mobile developer portfolio directly with Netlify by linking your own repository.

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).

## Technologies Used 

- [React](https://reactjs.org/) - Frontend framework (v16.8+)
- [React i18next](https://react.i18next.com/) - Internationalization framework for localization
- [React Easy Emoji](https://github.com/appfigures/react-easy-emoji) - Cross-platform emoji support
- [React Headroom](https://github.com/KyleAMathews/react-headroom) - Smart header behavior
- [React Reveal](https://www.react-reveal.com/) - Smooth scroll animations
- [Lottie React](https://www.npmjs.com/package/lottie-react) - High-quality animations
- [Color Thief](https://github.com/lokesh/color-thief) - Dynamic color extraction
- [GraphQL](https://graphql.org/) - GitHub API integration
- [Apollo Client](https://www.apollographql.com/docs/react/get-started/) - GraphQL client
- [SCSS](https://sass-lang.com/) - Advanced CSS preprocessing
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation

## Key Features Implemented

✨ **Enhanced Achievement Section**
- Professional 2-column grid layout
- Responsive image scaling (280px desktop, 220px mobile)
- Hover effects and smooth transitions
- Full border-fitting images with negative margins

🌍 **Complete Internationalization**
- English and French translations
- react-i18next integration
- Persistent language preferences
- Auto browser language detection

📱 **Mobile-First Design**
- Responsive breakpoints for all devices
- Touch-friendly interface
- Optimized performance on mobile

🎨 **Professional UI/UX**
- Dark/Light mode support
- Consistent design language
- Modern card-based layouts
- Gradient accents and professional typography

## Mobile Development Resources
- [Apple Developer](https://developer.apple.com/) - iOS development resources
- [Android Developers](https://developer.android.com/) - Android development guides
- [Flutter](https://flutter.dev/) - Cross-platform framework
- [Firebase](https://firebase.google.com/) - Backend services
- [React Native](https://reactnative.dev/) - Cross-platform development

## File Structure

```
Mobile-Developer-Portfolio/
├── public/                    # Static files
├── src/
│   ├── assets/               # Images and media files
│   │   ├── images/          # Project and achievement images  
│   │   └── lottie/          # Animation files
│   ├── components/          # Reusable React components
│   │   ├── achievementCard/ # Achievement card component
│   │   ├── header/          # Navigation header
│   │   └── ...
│   ├── containers/          # Page sections
│   │   ├── achievement/     # Achievement section container
│   │   ├── greeting/        # Home section
│   │   └── ...
│   ├── contexts/            # React contexts
│   ├── locales/             # Translation files
│   │   ├── en/             # English translations
│   │   └── fr/             # French translations
│   ├── _globalColor.scss    # Global color variables
│   ├── portfolio.js         # Main configuration file
│   └── i18n.js             # Internationalization setup
├── ACHIEVEMENTS_IMPLEMENTATION.md  # Reusable implementation guide
└── README.md               # This file
```

## Performance Optimizations

- ⚡ **Lazy Loading**: Components load on demand
- 🖼️ **Image Optimization**: Proper sizing and compression
- 📦 **Code Splitting**: Reduced bundle sizes
- 🔄 **Efficient Re-renders**: Optimized React patterns
- 💾 **Local Storage**: Cached preferences and settings

## Contact Information

**Ameer Hamza** - Senior Mobile Application Developer

- **Email**: code.believers@gmail.com
- **Phone**: +92 323 7426165
- **LinkedIn**: [linkedin.com/in/ameer-hamza-2a203620b](https://linkedin.com/in/ameer-hamza-2a203620b)
- **GitHub**: [github.com/ameerhamzabeliever](https://github.com/ameerhamzabeliever)

## License

This project is based on the original [developerFolio](https://github.com/saadpasta/developerFolio) template and has been customized for mobile development portfolios.

---

⭐ **Star this repository if it helped you build your mobile developer portfolio!**
