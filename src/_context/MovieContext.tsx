import React, { createContext, useState, useContext } from "react";

const apiKey = "2f9a8bfa";
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

type Movie = {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
};

type MovieContextType = {
  movies: Movie[];
  isLoading: boolean;
  error: string;
  fetchMovies: (title: string, year?: string, type?: string) => Promise<void>;
  page?: number;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovies = async (title: string, year?: string, type?: string, page?:number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}&s=${title}&y=${year}&type=${type}&page=${page || 1}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, isLoading, error, fetchMovies, page }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovies must be used inside a MovieProvider");
  return context;
};