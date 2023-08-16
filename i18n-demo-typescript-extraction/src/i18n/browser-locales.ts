export function browserLocales() {
  const result = [];

  // List of languages from HTTP Accept-Language header.
  // Should be the ones the user configured in their browser.
  if (navigator.languages) {
    for (let lang of navigator.languages) {
      result.push(lang);
    }
  }

  // Non-standard, used in IE 11.
  if (navigator.userLanguage) {
    result.push(navigator.userLanguage);
  }

  // UI language (language of browser and probably OS).
  if (navigator.language) {
    result.push(navigator.language);
  }

  return result;
}
