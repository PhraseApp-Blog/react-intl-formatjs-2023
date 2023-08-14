import { useEffect } from "react";
import { useIntl } from "react-intl";
import { locales } from "./i18n-config";

export function useDocL10n() {
  const { locale, formatMessage } = useIntl();

  useEffect(() => {
    document.dir = locales[locale].dir;
    document.title = formatMessage({
      id: "app.title",
      defaultMessage: "Yomtaba",
    });
  }, [locale, formatMessage]);
}
