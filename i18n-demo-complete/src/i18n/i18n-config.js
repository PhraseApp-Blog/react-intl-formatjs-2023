import enMessages from "../lang/en-US.json";
import arMessages from "../lang/ar-EG.json";

export const defaultLocale = "en-US";

export const locales = {
  "en-US": {
    name: "English",
    messages: enMessages,
    dir: "ltr",
  },
  "ar-EG": {
    name: "Arabic (العربية)",
    messages: arMessages,
    dir: "rtl",
  },
};
