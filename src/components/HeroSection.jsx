import SplineBox from "./SplineBox";

function HeroSection() {
  return (
    <section className="text-center mt-20 px-6">

      <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Turn product ideas into
        <br /> concepts instantly with AI
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        Visualize, communicate and iterate with powerful AI tools.
      </p>

      {/* Search Input */}
      <div className="mt-8 flex justify-center">
        <div className="flex bg-[#111827] border border-purple-600 rounded-full overflow-hidden shadow-lg w-[500px]">
          <input
            type="text"
            placeholder="Describe your idea..."
            className="flex-1 p-4 bg-transparent outline-none text-white"
          />
          <button className="px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-80 transition">
            Generate
          </button>
        </div>
      </div>

      <SplineBox />

    </section>
  );
}

export default HeroSection;