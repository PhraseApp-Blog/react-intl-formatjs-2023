import Header from "./components/Header";
import Recipe from "./components/Recipe";
import { useDocL10n } from "./i18n/useDocL10n";

function App() {
  useDocL10n();

  return (
    <div className="w-[600px] mx-auto">
      <Header />
      <Recipe />
    </div>
  );
}

export default App;
