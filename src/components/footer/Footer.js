import React, {useContext} from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(`${t("footer.madeWith")} ❤️`)}
        </p>
      
      </div>
    </Fade>
  );
}
