import { useContext } from "react";
import { Locale, locales } from "./i18n-config";
import { LocaleContext } from "./LocaleContext";
import { setStoredLocale } from "./stored-locale";

export default function LangSwitcher() {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div className="flex relative items-center bg-amber-900 text-amber-200 rounded-md py-[2px] ps-1 after:content-[''] after:w-3 after:h-3 after:bg-amber-200 after:clip-arrow after:block after:absolute after:top-[10px] after:end-2">
      <img
        src="/noun-language-4114572.svg"
        alt="Langage switcher icon"
        className="w-4 h-4 me-1"
      />

      <select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value as Locale);
          setStoredLocale(e.target.value as Locale);
        }}
        className="bg-transparent appearance-none pe-6"
      >
        {Object.keys(locales).map((loc: string) => (
          <option value={loc} key={loc}>
            {locales[loc as Locale].name}
          </option>
        ))}
      </select>
    </div>
  );
}
