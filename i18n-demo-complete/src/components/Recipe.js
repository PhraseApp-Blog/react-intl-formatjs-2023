import { FormattedMessage, useIntl } from "react-intl";
import Nutrition from "./Nutrition";

export default function Recipe() {
  const intl = useIntl();

  return (
    <main className="bg-stone-950 w-full rounded-lg shadow-lg overflow-hidden mt-4 px-4 pb-4">
      <h2 className="text-amber-200 text-xs font-thin mt-2 mb-1">
        <FormattedMessage id="recipe.title_label" />
      </h2>
      <h3 className="ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-amber-300 to-amber-500 text-stone-950 text-lg font-bold mb-2 px-2 py-1 rounded-sm">
        <FormattedMessage id="recipe.title" />
      </h3>
      <div className="flex">
        <div className="w-[200px] ltr:mr-4 rtl:ml-4">
          <img
            src="/vegan_burger.jpg"
            alt={intl.$t({ id: "recipe.img_alt" })}
          />
        </div>

        <div className="grow">
          <div className="flex justify-between items-baseline mb-1">
            <p className="text-amber-300">
              <FormattedMessage
                id="recipe.author"
                values={{ author: "Rabia Mousa" }}
              />
            </p>
            <p className="text-amber-300 text-xs font-thin">2023/6/20</p>
          </div>

          <div className="flex">
            <p className="text-amber-100 text-xs font-light py-1 px-2 rounded-sm ltr:mr-2 rtl:ml-2 bg-amber-800">
              ⏲️ 40min
            </p>

            <p className="text-amber-100 text-xs font-light py-1 px-2 rounded-sm bg-amber-800">
              ❤️ 2291
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
