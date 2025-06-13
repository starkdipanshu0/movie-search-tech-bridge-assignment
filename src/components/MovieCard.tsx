import { Link } from "react-router-dom";

type Movie = {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-gray-200 w-full max-w-xs mx-auto">
      <div className="aspect-[2/3] bg-gray-100">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-base font-semibold truncate" title={movie.Title}>
          {movie.Title}
        </h3>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>{movie.Year}</span>
          <span className="capitalize">{movie.Type}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
