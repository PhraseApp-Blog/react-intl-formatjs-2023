import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { defaultLocale } from "./i18n-config";
import { LocaleContext } from "./LocaleContext";
import { userLocale } from "./user-locale";

export default function I18n(props) {
  const [locale, setLocale] = useState(userLocale());
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    setMessages(null);

    import(`../lang/compiled/${locale}.json`)
      .then((messages_) => setMessages(messages_))
      .catch((err) =>
        console.error(`Error loading messages for locale ${locale}: `, err)
      );
  }, [locale]);

  return !messages ? (
    <p>Loading...</p>
  ) : (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
