export default function Header() {
  return (
    <header className="bg-amber-400/80 w-full mt-2 px-6 py-3 rounded-md flex">
      <img
        alt="App logo"
        className="w-6 h-6 mr-[1px]"
        src="/noun-recipe-2701716.svg"
      />
      <h1 className="text-stone-950 font-bold">Yomtaba</h1>
      <h2 className="font-thin">·recipe of the day</h2>
    </header>
  );
}
