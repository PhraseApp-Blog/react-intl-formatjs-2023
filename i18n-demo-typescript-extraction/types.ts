import messages from "./src/lang/en-US.json";

declare global {
  interface Navigator {
    userLanguage?: string;
  }
}
