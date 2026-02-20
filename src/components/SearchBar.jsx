import { useState } from "react";
import Loader from "./Loader";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query) return;

    setLoading(true);

    // Future backend integration
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex w-2/3 max-w-2xl bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Ask your AI..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-4 bg-transparent outline-none text-white"
        />
        <button
          onClick={handleSearch}
          className="px-6 bg-blue-600 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <Loader />}
    </div>
  );
}

export default SearchBar;
