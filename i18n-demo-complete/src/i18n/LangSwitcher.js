import { useContext } from "react";
import { locales } from "./i18n-config";
import { LocaleContext } from "./LocaleContext";
import { setStoredLocale } from "./stored-locale";

export default function LangSwitcher() {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div className="flex relative items-center bg-amber-900 text-amber-200 rounded-md py-[2px] ltr:pl-1 rtl:pr-1 after:content-[''] after:w-3 after:h-3 after:bg-amber-200 after:clip-arrow after:block after:absolute after:top-[10px] ltr:after:right-2 rtl:after:left-2">
      <img
        src="/noun-language-4114572.svg"
        alt="Langage switcher icon"
        className="w-4 h-4 ltr:mr-1 rtl:ml-1"
      />

      <select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value);
          setStoredLocale(e.target.value);
        }}
        className="bg-transparent appearance-none ltr:pr-5 rtl:pl-5"
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
