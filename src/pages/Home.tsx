import SearchBar from "@/components/SearchBar";
import MovieGrid from "@/components/MovieGrid";
import Pagination from "@/components/Pagination";
import { useMovies } from "@/_context/MovieContext";
import { useState, useEffect } from "react";

function Home() {
  const { fetchMovies, movies, query } = useMovies();
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    fetchMovies(query.title, query.year, query.type, currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-8 lg:px-24 py-8 gap-10">
      {/* Search Section */}
      <div className="w-full px-6 mx-auto">
        <SearchBar />
      </div>

      {/* Movie Grid */}
      <MovieGrid />

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={currentPage}
          
          totalResults={movies.length >= 10 ? 100 : movies.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Home;
