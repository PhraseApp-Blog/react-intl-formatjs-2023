function App() {
  return (
    <div className="w-[600px] mx-auto">
      <header className="bg-amber-400/80 w-full mt-2 px-6 py-3 rounded-md flex">
        <img
          alt="App logo"
          className="w-6 h-6 mr-[1px]"
          src="/noun-recipe-2701716.svg"
        />
        <h1 className="text-stone-950 font-bold">Recipe of the Day</h1>
      </header>

      <main className="bg-stone-950 w-full rounded-lg shadow-lg overflow-hidden mt-4 px-4 pb-4">
        <h2 className="text-amber-200 text-xs font-thin mt-2">
          Today's recipe
        </h2>
        <h3 className="bg-gradient-to-r from-amber-400 to-amber-700 text-stone-950 text-lg font-semibold mb-2 px-1 rounded-sm">
          Delightful Vegan Bean Burger
        </h3>
        <div className="flex">
          <div className="w-[200px] mr-4">
            <img src="/vegan_burger.jpg" alt="Vegan burger on a wooden plate" />
          </div>

          <div className="grow">
            <div className="flex justify-between items-baseline mb-1">
              <p className="text-amber-300">by Rabia Mousa</p>
              <p className="text-amber-300 text-xs font-thin">2023/6/20</p>
            </div>

            <div className="flex">
              <p className="text-amber-100 text-xs font-light py-1 px-2 rounded-sm mr-2 bg-amber-800">
                ⏲️ 40min
              </p>

              <p className="text-amber-100 text-xs font-light py-1 px-2 rounded-sm bg-amber-800">
                ❤️ 2291
              </p>
            </div>

            <div className="mt-4">
              <table className="table-auto border-collapse w-full bg-stone-800/40">
                <thead>
                  <tr className="bg-amber-400 text-stone-950 text-sm">
                    <th colSpan={2}>
                      <h4 className="text-stone-950 font-bold text-left px-2 py-1">
                        Nutrition
                      </h4>
                    </th>

                    <th className="text-right font-normal w-1/3 px-2 py-1">
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
                    <td className="text-right">2%</td>
                  </tr>
                  <tr>
                    <td>Carbs</td>
                    <td>30g</td>
                    <td className="text-right">11%</td>
                  </tr>
                  <tr>
                    <td>Protein</td>
                    <td>7g</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
