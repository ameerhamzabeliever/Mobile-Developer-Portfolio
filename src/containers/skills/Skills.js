import React, {useContext} from "react";
import { useTranslation } from "react-i18next";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {t("skills.title")}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {t("skills.subtitle")}
            </p>
            <SoftwareSkill />
            <div>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                {t("skills.skill1")}
              </p>
              <div
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                <p style={{ marginBottom: "10px" }}>{t("skills.skill2")}</p>
                <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <p style={{ margin: "10px 0" }}>{t("skills.skill2_sub1")}</p>
                  <p style={{ margin: "10px 0" }}>{t("skills.skill2_sub2")}</p>
                  <p style={{ margin: "10px 0" }}>{t("skills.skill2_sub3")}</p>
                </div>
              </div>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                {t("skills.skill3")}
              </p>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                {t("skills.skill4")}
              </p>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                {t("skills.skill5")}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
