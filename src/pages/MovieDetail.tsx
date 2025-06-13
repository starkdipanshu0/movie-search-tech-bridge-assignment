import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import MovieDetailSkeleton from "@/components/MovieDetailSkeleton";

type MovieDetailType = {
  Title: string;
  Poster: string;
  Year: string;
  Genre: string;
  Plot: string;
  Director: string;
  Actors: string;
  imdbRating: string;
  Runtime: string;
  imdbID: string;
};

const MovieDetail = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetailType | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=2f9a8bfa&i=${imdbID}&plot=full`);
      const data = await res.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) return <MovieDetailSkeleton />;
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white"
      style={{
        backgroundImage: `url(${
          movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/1200x800"
        })`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 items-center">
        {/* Poster */}
        <div className="w-full md:w-1/3 shadow-xl rounded-xl overflow-hidden">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.Title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold">{movie.Title}</h1>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <span className="bg-yellow-500/80 px-3 py-1 rounded-full text-black">
              {movie.Year}
            </span>
            <span className="bg-blue-500/80 px-3 py-1 rounded-full">
              {movie.Runtime}
            </span>
            {movie.Genre.split(", ").map((genre, i) => (
              <span
                key={i}
                className="bg-gray-200/10 border border-white/20 px-3 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="text-gray-200 leading-relaxed">{movie.Plot}</p>

          <div className="text-sm text-gray-300 space-y-1">
            <p>
              <strong className="text-white">Director:</strong> {movie.Director}
            </p>
            <p>
              <strong className="text-white">Actors:</strong> {movie.Actors}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-xl font-semibold text-yellow-400">
            <FaStar />
            {movie.imdbRating}
            <span className="text-sm text-gray-300">/ 10 IMDb</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/")}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              ← Back to Home
            </button>
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 px-6 py-2 rounded-full text-black font-semibold hover:bg-yellow-400 transition"
            >
              View on IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
