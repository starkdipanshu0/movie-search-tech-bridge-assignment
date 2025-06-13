import React, { useState } from "react";
import { useMovies } from "@/_context/MovieContext";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const { fetchMovies } = useMovies();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    fetchMovies(title, year, type);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-sm rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-3  mx-auto border border-gray-200"
    >
      {/* Year */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border px-4 py-2 rounded text-sm focus:outline-none w-full md:w-1/5"
      >
        <option value="">Year</option>
        {Array.from({ length: 2025 - 1975 + 1 }, (_, index) => 2025 - index).map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {/* Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border px-4 py-2 rounded text-sm focus:outline-none w-full md:w-1/5"
      >
        <option value="">Type</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>

      {/* Title */}
      <input
        type="text"
        placeholder="Search movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm shadow-inner w-full md:w-1/2"
        required
      />

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition w-full md:w-auto justify-center"
      >
        <FaSearch />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
