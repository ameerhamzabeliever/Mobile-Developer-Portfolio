import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Chrome-specific fix: Force language detection on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 
                         sessionStorage.getItem('i18nextLng');
    
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
    // Chrome fallback: Manually save to both localStorage and sessionStorage
    try {
      localStorage.setItem('i18nextLng', lng);
      sessionStorage.setItem('i18nextLng', lng);
    } catch (error) {
      console.warn('Could not save language preference:', error);
    }
  };

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button 
        className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
        onClick={() => changeLanguage('fr')}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
}
