import { match } from "@formatjs/intl-localematcher";
import { defaultLocale, locales } from "./i18n-config";
import { browserLocales } from "./browser-locales";
import { getStoredLocale } from "./stored-locale";

export function userLocale() {
  const storedLocale = getStoredLocale();
  if (storedLocale) return storedLocale;

  const appLocales = Object.keys(locales);
  return match(browserLocales(), appLocales, defaultLocale);
}
