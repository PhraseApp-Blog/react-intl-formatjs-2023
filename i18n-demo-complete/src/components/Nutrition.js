/* eslint-disable react/style-prop-object */
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";

export default function Nutrition() {
  const intl = useIntl();

  return (
    <table className="table-auto border-collapse w-full bg-stone-800/40">
      <thead>
        <tr className="bg-amber-400 text-stone-950 text-sm">
          <th colSpan={2}>
            <h4 className="text-stone-950 font-bold ltr:text-left rtl:text-right px-2 py-1">
              <FormattedMessage id="nutrition.header" />
            </h4>
          </th>

          <th className="ltr:text-right rtl:text-left font-normal w-1/3 px-2 py-1">
            <FormattedMessage id="nutrition.daily_value_header" />
          </th>
        </tr>
      </thead>
      <tbody className="text-amber-200 text-sm">
        <tr>
          <td>
            <FormattedMessage id="nutrition.calories_label" />
          </td>
          <td>
            <FormattedNumber value={151} />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <FormattedMessage id="nutrition.fat_label" />
          </td>
          <td>
            <FormattedNumber value={1} style="unit" unit="gram" />
          </td>
          <td className="ltr:text-right rtl:text-left">
            <FormattedNumber value={0.2} style="percent" />
          </td>
        </tr>
        <tr>
          <td>
            <FormattedMessage id="nutrition.carbs_label" />
          </td>
          <td>{intl.formatNumber(30, { style: "unit", unit: "gram" })}</td>
          <td className="ltr:text-right rtl:text-left">
            {intl.formatNumber(0.11, { style: "percent" })}
          </td>
        </tr>
        <tr>
          <td>
            <FormattedMessage id="nutrition.protein_label" />
          </td>
          <td>
            <FormattedNumber value={7} style="unit" unit="gram" />
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
