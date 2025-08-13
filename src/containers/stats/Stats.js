import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import "./Stats.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { statsSection } from "../../portfolio";

export default function Stats() {
  const { t } = useTranslation();
  const { isDark } = useContext(StyleContext);
  
  if (!statsSection || !statsSection.display || !statsSection.data) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="stats">
        <div className="stats-header-div">
          <h1 className={isDark ? "dark-mode stats-heading" : "stats-heading"}>
            {t("stats.title")}
          </h1>
          {statsSection.subtitle && (
            <p className={isDark ? "dark-mode stats-subtitle" : "stats-subtitle"}>
              {t("stats.subtitle")}
            </p>
          )}
        </div>
        <div className="stats-cards-container">
          {/* First 4 cards in normal grid */}
          <div className="stats-cards-div">
            {statsSection.data.slice(0, 4).map((stat, i) => {
              return (
                <Fade bottom duration={1000} distance="20px" key={i}>
                  <div className={`stat-card ${isDark ? "dark-mode" : ""}`}>
                    <div className="stat-content">
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{t(`stats.${stat.labelKey}`)}</div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
          
          {/* Last 2 cards centered */}
          <div className="stats-cards-centered">
            {statsSection.data.slice(4, 6).map((stat, i) => {
              return (
                <Fade bottom duration={1000} distance="20px" key={i + 4}>
                  <div className={`stat-card ${isDark ? "dark-mode" : ""}`}>
                    <div className="stat-content">
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{t(`stats.${stat.labelKey}`)}</div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
