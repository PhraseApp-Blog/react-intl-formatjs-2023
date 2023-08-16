import { createContext } from "react";
import { Locale } from "./i18n-config";

interface ILocaleContext {
  locale: string;
  setLocale: (newLocale: Locale) => void;
}

export const LocaleContext = createContext<ILocaleContext>({
  locale: "",
  setLocale: () => {},
});
