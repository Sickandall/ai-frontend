function MainPanel() {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-3/4 max-w-4xl bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">
          Response Panel
        </h2>
        <p className="text-gray-300">
          Your AI response will appear here after backend integration.
        </p>
      </div>
    </div>
  );
}

export default MainPanel;
