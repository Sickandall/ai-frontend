import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MatrixBackground from "./components/MatrixBackground";
import MainPanel from "./components/MainPanel";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10">
        <Header />
        <SearchBar />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;
