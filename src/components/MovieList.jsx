import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import MovieCards from "./MovieCard";

const MovieList = () => {
  const { searchData, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {searchData.map((movie) => (
        <MovieCards key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MovieList;
