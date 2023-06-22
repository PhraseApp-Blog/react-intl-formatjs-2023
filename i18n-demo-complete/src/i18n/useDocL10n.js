import { useEffect } from "react";
import { useIntl } from "react-intl";
import { locales } from "./i18n-config";

export function useDocL10n() {
  const intl = useIntl();

  useEffect(() => {
    document.dir = locales[intl.locale].dir;
    document.title = intl.$t({ id: "app.title" });
  }, [intl, intl.locale]);
}
