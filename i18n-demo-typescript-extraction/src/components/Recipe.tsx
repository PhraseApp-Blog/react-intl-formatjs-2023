import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  useIntl,
} from "react-intl";
import Nutrition from "./Nutrition";

export default function Recipe() {
  const intl = useIntl();

  return (
    <main className="bg-stone-950 w-full rounded-lg shadow-lg overflow-hidden mt-4 px-4 pb-4">
      <h2 className="text-amber-200 text-xs font-thin mt-2 mb-1">
        <FormattedMessage defaultMessage="Today's recipe" />
      </h2>
      <h3 className="ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-amber-300 to-amber-500 text-stone-950 text-lg font-bold mb-2 px-2 py-1 rounded-sm">
        <FormattedMessage defaultMessage="Delightful Vegan Bean Burger" />
      </h3>
      <div className="flex">
        <div className="w-[200px] me-4">
          <img
            src="/vegan_burger.jpg"
            alt={intl.formatMessage({
              defaultMessage: "Vegan burger on a wooden plate",
            })}
          />
        </div>

        <div className="grow">
          <div className="flex justify-between items-baseline mb-1">
            <p className="text-amber-300">
              <FormattedMessage
                defaultMessage="by {author}"
                values={{ author: "Rabia Mousa" }}
              />
            </p>
            <p className="text-amber-300 text-xs font-thin">
              <FormattedDate value={Date.parse("2023-06-20")} />
            </p>
          </div>

          <div className="flex">
            <p className="text-amber-100 text-xs font-light py-1 px-2 rounded-sm me-2 bg-amber-800">
              ⏲️{" "}
              <FormattedMessage
                defaultMessage="{min}min"
                values={{ min: 40 }}
              />
            </p>

            <p className="text-amber-100 text-xs font-light py-1 px-2 rounded-sm bg-amber-800 me-2">
              ❤️ <FormattedNumber value={2291} />
            </p>

            <p className="text-amber-100 text-xs font-light py-1 px-2 rounded-sm bg-amber-800">
              <FormattedMessage
                defaultMessage="{count, plural, =0 {No comments} one {# comment} other {# comments}}"
                values={{ count: 419 }}
              />
            </p>
          </div>

          <div className="mt-4">
            <Nutrition />
          </div>
        </div>
      </div>
    </main>
  );
}
