export default function Nutrition() {
  return (
    <table className="table-auto border-collapse w-full bg-stone-800/40">
      <thead>
        <tr className="bg-amber-400 text-stone-950 text-sm">
          <th colSpan={2}>
            <h4 className="text-stone-950 font-bold ltr:text-left rtl:text-right px-2 py-1">
              Nutrition
            </h4>
          </th>

          <th className="ltr:text-right rtl:text-left font-normal w-1/3 px-2 py-1">
            % Daily Value
          </th>
        </tr>
      </thead>
      <tbody className="text-amber-200 text-sm">
        <tr>
          <td>Calories</td>
          <td>151</td>
          <td></td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>1g</td>
          <td className="ltr:text-right rtl:text-left">2%</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>30g</td>
          <td className="ltr:text-right rtl:text-left">11%</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>7g</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
