import { FormattedMessage, useIntl } from "react-intl";

export default function Header() {
  const intl = useIntl();

  return (
    <header className="bg-amber-400/80 w-full mt-2 px-6 py-3 rounded-md flex">
      <img
        alt={intl.$t({ id: "app.logo_alt" })}
        className="w-6 h-6 mr-[1px]"
        src="/noun-recipe-2701716.svg"
      />
      <h1 className="text-stone-950 font-bold">
        <FormattedMessage id="app.title" />
      </h1>
      ·
      <h2 className="font-thin">
        <FormattedMessage id="app.tagline" />
      </h2>
    </header>
  );
}
