import { locales } from "../src/i18n/i18n-config";
import { exec } from "child_process";

for (const locale of Object.keys(locales)) {
  const command = `npm run formatjs-compile -- "src/lang/${locale}.json" --ast --out-file "src/lang/compiled/${locale}.json" --format simple`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.error(`error: ${stderr}`);
    }
  });
}