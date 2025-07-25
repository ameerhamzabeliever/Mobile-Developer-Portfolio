# Achievements Section Implementation Guide

This document contains the complete implementation of the achievements section that can be reused in other React projects.

## 📁 File Structure Required

```
src/
├── components/
│   └── achievementCard/
│       ├── AchievementCard.js
│       └── AchievementCard.scss
├── containers/
│   └── achievement/
│       ├── Achievement.js
│       └── Achievement.scss
├── assets/
│   └── images/
│       ├── appleCertificate.png
│       ├── HackathonCertificate.png
│       └── leaderCertificate.jpg
├── locales/
│   ├── en/
│   │   └── translation.json
│   └── fr/
│       └── translation.json
├── contexts/
│   └── StyleContext.js
├── _globalColor.scss
└── portfolio.js
```

## 🎨 Styling Files

### 1. Global Colors (_globalColor.scss)
```scss
// Add these color variables to your global colors file
$lightBackground2: #ffffff;
$lightBorder1: #e1e8ed;
$lightBoxShadowDark: rgba(0, 0, 0, 0.1);
$buttonColor: #007AFF;
$buttonHover: #0056CC;
$lightBackground3: #ffffff;
$achievementCertificateCardHoverDark: rgba(0, 122, 255, 0.3);

// Dark mode variables
$darkBackground2: #1a1a1a;
$darkBorder1: #333333;
$darkBoxShadowDark: rgba(255, 255, 255, 0.1);
```

### 2. Achievement Container Styles (Achievement.scss)
```scss
@import "../../_globalColor";

.achievement-subtitle {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

.achievement-cards-div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .achievement-cards-div {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .achievement-cards-div {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

### 3. Achievement Card Styles (AchievementCard.scss)
```scss
@import "../../_globalColor";

.certificate-card {
  background-color: $lightBackground2;
  box-shadow: $lightBoxShadowDark 0px 10px 30px -15px;
  padding: 0 0 1.5rem 0;
  border-radius: 16px;
  border: 1px solid $lightBorder1;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.certificate-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #007AFF 0%, #34C759 50%, #FF9500 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.certificate-card:hover::before {
  opacity: 1;
}

.certificate-detail-div {
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.5rem;
}

.card-title {
  color: #434e5e;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.card-subtitle {
  color: #646464;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
}

.dark-mode.card-title {
  color: #ffffff;
}

.dark-mode.card-subtitle {
  color: #d3d3d3;
}

.certificate-card:hover {
  box-shadow: $lightBoxShadowDark 0px 25px 50px -12px;
  transform: translateY(-8px);
}

.dark-mode.certificate-card {
  background-color: $darkBackground2;
  border: 1px solid $darkBorder1;
  box-shadow: $darkBoxShadowDark 0px 10px 30px -15px;
}

.dark-mode.certificate-card:hover {
  box-shadow: $achievementCertificateCardHoverDark 0px 25px 50px -12px;
  transform: translateY(-8px);
}

.certificate-image-div {
  position: relative;
  height: 280px;
  overflow: hidden;
  display: block;
  border-radius: 12px 12px 0 0;
  background: #f8f9fa;
  margin: -1.5rem -1.5rem 1.5rem -1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.certificate-image-div .card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.certificate-card:hover .card-image {
  transform: scale(1.05);
}

.certificate-card-footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: auto;
  padding-top: 1rem;
}

.certificate-card-footer span.certificate-tag {
  background: $buttonColor;
  color: $lightBackground3;
  vertical-align: middle;
  align-items: center;
  border-radius: 6px;
  display: inline-flex;
  font-size: 0.8rem;
  height: 2.2em;
  justify-content: center;
  white-space: nowrap;
  line-height: 1.5;
  margin: 0 0.3rem 0.3rem 0;
  padding: 0 0.8em;
  cursor: pointer;
  transition: 0.3s ease-in;
  font-weight: 500;
}

span.certificate-tag:hover {
  background: $buttonHover;
}

.dark-mode span.certificate-tag {
  background: $buttonColor;
  color: $lightBackground3;
}

.dark-mode span.certificate-tag:hover {
  background: $buttonHover;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .achievement-cards-div {
    gap: 1.5rem 1.5rem;
  }
  
  .certificate-image-div {
    height: 250px;
    margin: -1.25rem -1.25rem 1.25rem -1.25rem;
  }
  
  .certificate-card {
    min-height: 470px;
    padding: 0 0 1.25rem 0;
  }

  .certificate-detail-div {
    padding: 0 1.25rem;
  }
}

@media (max-width: 768px) {
  .achievement-cards-div {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .certificate-image-div {
    height: 220px;
    margin: -1rem -1rem 1rem -1rem;
  }
  
  .certificate-card {
    min-height: 440px;
    padding: 0 0 1rem 0;
  }

  .certificate-detail-div {
    padding: 0 1rem;
  }
}
```

## ⚛️ React Components

### 1. Achievement Card Component (AchievementCard.js)
```javascript
import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.subtitle}
        </p>
      </div>
      {cardInfo.footerLink && cardInfo.footerLink.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footerLink.map((v, i) => {
            return (
              <span
                key={i}
                className={
                  isDark ? "dark-mode certificate-tag" : "certificate-tag"
                }
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                {v.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
```

### 2. Achievement Container Component (Achievement.js)
```javascript
import React, {useContext} from "react";
import { useTranslation } from "react-i18next";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  
  if (!achievementSection.display) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div>
          <h1 className="skills-heading">
            {t('achievements.title', achievementSection.title)}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {t('achievements.subtitle', achievementSection.subtitle)}
          </p>
        </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: t(card.title, card.title),
                    subtitle: t(card.subtitle, card.subtitle),
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footerLink: card.footerLink
                  }}
                />
              );
            })}
          </div>
      </div>
    </Fade>
  );
}
```

## 📊 Data Configuration (portfolio.js)

```javascript
import emoji from "react-easy-emoji";

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

export { achievementSection };
```

## 🌍 Localization Files

### English Translation (en/translation.json)
```json
{
  "achievements": {
    "title": "Achievements And Certifications 🏆",
    "subtitle": "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    "cards": {
      "apple": {
        "title": "Apple Certified iOS App Development with Swift",
        "subtitle": "Completed Apple's official curriculum focused on iOS development using Swift. Gained hands-on experience with app architecture, Swift programming, UI design, and deployment. Participated through the Swift Student Challenge and affiliated Apple learning initiatives"
      },
      "hackathon": {
        "title": "Hackathon Winner at AngelHack",
        "subtitle": "Secured first place at AngelHack for developing a mobile application that provided real-time emergency assistance and geo-tracking. Led the iOS development, implemented scalable architecture using Swift and MVVM, and presented the solution to a panel of industry experts"
      },
      "speaker": {
        "title": "Speaker at Mobile Dev Meetups or Conferences",
        "subtitle": "Delivered technical talks on iOS architecture patterns including MVVM, Clean Swift, and modular app design. Shared insights on scalable code practices, real-world debugging strategies, and cross-platform development using Flutter and SwiftUI at various local meetups and online sessions"
      }
    }
  }
}
```

### French Translation (fr/translation.json)
```json
{
  "achievements": {
    "title": "Réalisations et certifications 🏆",
    "subtitle": "Réalisations, certifications, lettres de prix et quelques trucs sympas que j'ai faits !",
    "cards": {
      "apple": {
        "title": "Apple Certifié Développement d'App iOS avec Swift",
        "subtitle": "Terminé le curriculum officiel d'Apple axé sur le développement iOS avec Swift. Acquis une expérience pratique avec l'architecture d'app, la programmation Swift, la conception UI et le déploiement. Participé via le Swift Student Challenge et les initiatives d'apprentissage affiliées d'Apple"
      },
      "hackathon": {
        "title": "Gagnant du Hackathon chez AngelHack",
        "subtitle": "Première place sécurisée chez AngelHack pour le développement d'une application mobile offrant une assistance d'urgence en temps réel et un géo-tracking. Dirigé le développement iOS, implémenté une architecture évolutive utilisant Swift et MVVM, et présenté la solution à un panel d'experts de l'industrie"
      },
      "speaker": {
        "title": "Conférencier aux Meetups ou Conférences de Développement Mobile",
        "subtitle": "Présenté des talks techniques sur les modèles d'architecture iOS incluant MVVM, Clean Swift, et la conception d'app modulaire. Partagé des insights sur les pratiques de code évolutives, les stratégies de débogage du monde réel, et le développement cross-platform utilisant Flutter et SwiftUI lors de diverses meetups locales et sessions en ligne"
      }
    }
  }
}
```

## 📦 Dependencies Required

```json
{
  "dependencies": {
    "react": "^16.8.0+",
    "react-i18next": "^11.0.0+",
    "react-reveal": "^1.2.2",
    "react-easy-emoji": "^1.8.1"
  }
}
```

## 🔧 Context Setup (StyleContext.js)

```javascript
import React, {createContext} from "react";

const StyleContext = createContext({
  isDark: false,
  changeTheme: () => {}
});

export default StyleContext;
```

## 🚀 Usage Instructions

1. **Copy all files** to your project structure
2. **Install dependencies** using npm or yarn
3. **Import the Achievement component** into your main app
4. **Configure your data** in portfolio.js
5. **Add your certificate images** to assets/images/
6. **Set up i18n** for internationalization support
7. **Import and use** in your main component:

```javascript
import Achievement from './containers/achievement/Achievement';

function App() {
  return (
    <div className="App">
      <Achievement />
    </div>
  );
}
```

## ✨ Features Included

- ✅ **Responsive Design**: 2-column grid on desktop, 1-column on mobile
- ✅ **Dark/Light Mode**: Full theme support
- ✅ **Internationalization**: English and French translations
- ✅ **Smooth Animations**: Hover effects and transitions
- ✅ **Image Optimization**: Full-width images with proper scaling
- ✅ **Professional Styling**: Modern card design with gradients
- ✅ **Accessibility**: Proper alt texts and semantic HTML
- ✅ **No Footer Buttons**: Clean design without interactive elements

## 🎯 Customization Guide

### Adding New Achievement Cards
1. Add new image to `assets/images/`
2. Add translation keys to both language files
3. Add new card object to `achievementsCards` array
4. Update imageAlt for accessibility

### Changing Colors
- Modify variables in `_globalColor.scss`
- Update gradient in `.certificate-card::before`

### Modifying Layout
- Change grid columns in `.achievement-cards-div`
- Adjust card heights in `.certificate-card`
- Modify image heights in `.certificate-image-div`

This implementation is ready to be copied and used in any other React project with minimal setup required!
