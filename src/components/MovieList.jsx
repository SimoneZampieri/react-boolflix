import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import MovieCards from "./MovieCard";

const MovieList = () => {
  const { movies, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <MovieCards key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MovieList;
