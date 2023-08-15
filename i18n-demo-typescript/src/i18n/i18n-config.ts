export const defaultLocale = "en-US";

export type Locale = keyof typeof locales;

export const locales = {
  "en-US": {
    name: "English",
    dir: "ltr",
  },
  "ar-EG": {
    name: "Arabic (العربية)",
    dir: "rtl",
  },
};
