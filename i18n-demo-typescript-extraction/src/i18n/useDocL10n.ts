import { useEffect } from "react";
import { useIntl } from "react-intl";
import { Locale, locales } from "./i18n-config";

export function useDocL10n() {
  const { locale, formatMessage } = useIntl();

  useEffect(() => {
    document.dir = locales[locale as Locale].dir;
    document.title = formatMessage({
      defaultMessage: "Yomtaba",
    });
  }, [locale, formatMessage]);
}
