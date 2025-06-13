import MovieCard from "./MovieCard";
import { useMovies } from "@/_context/MovieContext";

const MovieGrid = () => {
  const { movies, isLoading, error } = useMovies();

  if (isLoading) return <p className="text-center py-10">Loading movies...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (movies.length === 0) return <p className="text-center py-10">No movies found</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 py-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;