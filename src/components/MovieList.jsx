import { useGlobalContext } from "../context/GlobalContext";
import MediaCards from "./MovieCard";

const MovieList = () => {
  const { setMovies } = useGlobalContext();

  const mediaType = setMovies.map((media) =>
    media.media_type === "movie" ? (
      <MediaCards key={media.id} media={media} />
    ) : null
  );

  return <>{mediaType}</>;
};

export default MovieList;
