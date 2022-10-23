import "./styles/global.css";
import ExplorerCard from "./components/ExplorerCard";
import Checklist from "./components/Checklist";
import "@fontsource/nunito-sans";

function App() {
  return (
    <main>
      <div className="split">
        <ExplorerCard />
        <Checklist />
      </div>
    </main>
  );
}

export default App;
