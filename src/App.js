import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Chrome-specific language initialization
    const initializeLanguage = () => {
      try {
        const savedLang = localStorage.getItem('i18nextLng') || 
                         sessionStorage.getItem('i18nextLng');
        
        // Chrome often doesn't detect language properly on first load
        if (savedLang && i18n.language !== savedLang) {
          console.log('Chrome fix: Setting language to', savedLang);
          i18n.changeLanguage(savedLang);
        } else if (!savedLang && i18n.language === 'en-US') {
          // Chrome sometimes returns 'en-US' instead of 'en'
          i18n.changeLanguage('en');
        }
      } catch (error) {
        console.warn('Language initialization error:', error);
        // Fallback to English if there's any error
        i18n.changeLanguage('en');
      }
    };

    // Run after a short delay to ensure i18n is fully initialized
    const timer = setTimeout(initializeLanguage, 100);
    return () => clearTimeout(timer);
  }, [i18n]);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
