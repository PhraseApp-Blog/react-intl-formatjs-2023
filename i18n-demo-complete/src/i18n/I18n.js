import { IntlProvider } from "react-intl";
import { defaultLocale, locales } from "./i18n-config";

export default function I18n(props) {
  return (
    <IntlProvider
      locale={defaultLocale}
      defaultLocale={defaultLocale}
      messages={locales[defaultLocale]}
    >
      {props.children}
    </IntlProvider>
  );
}
