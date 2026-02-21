import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0f1a] text-white overflow-hidden">

      {/* Moon Curve Gradient */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-blue-600 via-purple-700 to-indigo-900 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;