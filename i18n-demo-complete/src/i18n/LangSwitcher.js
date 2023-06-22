import { useContext } from "react";
import { locales } from "./i18n-config";
import { LocaleContext } from "./LocaleContext";
import { setStoredLocale } from "./stored-locale";

export default function LangSwitcher({ onLangChanged }) {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div className="flex">
      <img
        src="/noun-language-4114572.svg"
        alt="Langage switcher icon"
        className="w-4 h-4 mt-1 ltr:mr-1 rtl:ml-1"
      />

      <select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value);
          setStoredLocale(e.target.value);
        }}
        className="bg-transparent"
      >
        {Object.keys(locales).map((loc) => (
          <option value={loc} key={loc}>
            {locales[loc].name}
          </option>
        ))}
      </select>
    </div>
  );
}
