import React, {useContext} from "react";
import { useTranslation } from "react-i18next";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color">“\(</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">)”</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{t('navigation.skills')}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{t('navigation.experience')}</a>
            </li>
          )}
       
          {viewResume && (
            <li>
              <a href="#resume">{t('navigation.resume')}</a>
            </li>
          )}
          <li>
            <a href="#contact">{t('navigation.contact')}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <LanguageSwitcher />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
