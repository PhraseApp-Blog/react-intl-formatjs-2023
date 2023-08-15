import { FormattedMessage, useIntl } from "react-intl";
import LangSwitcher from "../i18n/LangSwitcher";

export default function Header() {
  const intl = useIntl();

  return (
    <header className="bg-amber-400/80 w-full mt-2 px-6 py-3 rounded-md flex justify-between">
      <div className="flex">
        <img
          alt={intl.formatMessage({
            defaultMessage: "Yomtaba logo",
            description: "Image alt text for app logo",
          })}
          className="w-6 h-6 ltr:mr-[1px] rtl:ml-[2px]"
          src="/noun-recipe-2701716.svg"
        />
        <h1 className="text-stone-950 font-bold">
          <FormattedMessage defaultMessage="Yomtaba" description="App name" />
        </h1>
        ·
        <h2 className="font-thin">
          <FormattedMessage
            defaultMessage="recipe of the day"
            description="App tagline"
          />
        </h2>
      </div>

      <LangSwitcher />
    </header>
  );
}
