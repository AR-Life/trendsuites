// src/utils/getUserLanguage.js

export function getUserLanguage() {
    if (typeof window === "undefined") return "en"; // Sunucu tarafı için varsayılan dil
  
    const userLang = navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  
    // Sadece desteklediğiniz dilleri döndürün
    const supportedLanguages = ["en", "tr", "de","ru"];
    return supportedLanguages.includes(userLang) ? userLang : "en";
  }
  