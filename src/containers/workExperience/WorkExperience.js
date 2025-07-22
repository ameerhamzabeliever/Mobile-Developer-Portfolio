import React, {useContext} from "react";
import { useTranslation } from "react-i18next";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">{t('experience.title')}</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  // Map dynamic translations for each experience
                  const getExperienceText = (company, field) => {
                    const companyKey = company.toLowerCase().replace(/\s+/g, '');
                    return t(`experience.${companyKey}.${field}`, card[field]);
                  };
                  
                  const translatedCard = {
                    ...card,
                    role: getExperienceText(card.company, 'role'),
                    desc: getExperienceText(card.company, 'description'),
                    heading: getExperienceText(card.company, 'heading'),
                    descBullets: card.descBullets ? card.descBullets.map((bullet, index) => 
                      t(`experience.${card.company.toLowerCase().replace(/\s+/g, '')}.points.${index}`, bullet)
                    ) : []
                  };
                  
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={translatedCard}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
