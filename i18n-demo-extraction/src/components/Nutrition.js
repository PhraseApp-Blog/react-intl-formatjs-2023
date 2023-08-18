/* eslint-disable react/style-prop-object */
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";

export default function Nutrition() {
  const intl = useIntl();

  return (
    <table className="table-auto border-collapse w-full bg-stone-800/40">
      <thead>
        <tr className="bg-amber-400 text-stone-950 text-sm">
          <th>
            <h4 className="text-stone-950 font-bold text-start px-2 py-1">
              <FormattedMessage defaultMessage="Nutrition" />
            </h4>
          </th>

          <th colSpan={2} className="text-end font-normal w-2/3 px-2 py-1">
            <FormattedMessage defaultMessage="Daily Value %" />
          </th>
        </tr>
      </thead>
      <tbody className="text-amber-200 text-sm">
        <tr>
          <td>
            <FormattedMessage defaultMessage="Calories" />
          </td>
          <td>
            <FormattedNumber value={151} />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <FormattedMessage defaultMessage="Fat" />
          </td>
          <td>
            <FormattedNumber value={1} style="unit" unit="gram" />
          </td>
          <td className="text-end">
            <FormattedNumber value={0.2} style="percent" />
          </td>
        </tr>
        <tr>
          <td>
            <FormattedMessage defaultMessage="Carbs" />
          </td>
          <td>{intl.formatNumber(30, { style: "unit", unit: "gram" })}</td>
          <td className="text-end">
            {intl.formatNumber(0.11, { style: "percent" })}
          </td>
        </tr>
        <tr>
          <td>
            <FormattedMessage defaultMessage="Protein" />
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
