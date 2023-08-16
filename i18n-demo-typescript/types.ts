import messages from "./src/lang/en-US.json";

declare global {
  interface Navigator {
    userLanguage?: string;
  }

  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof messages;
    }
  }
}
