const K_LOCALE = "locale";

export function getStoredLocale() {
  return localStorage.getItem(K_LOCALE);
}

export function setStoredLocale(newLocale) {
  localStorage.setItem(K_LOCALE, newLocale);
}
