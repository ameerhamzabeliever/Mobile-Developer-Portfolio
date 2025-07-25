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
