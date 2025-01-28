import { useGlobalContext } from "../context/GlobalContext";
import MediaCards from "./MovieCard";

const MovieList = () => {
  const { movies } = useGlobalContext();

  const mediaType = movies.map((media) => (
    <MediaCards key={media.id} media={media} />
  ));
  console.log(mediaType);
  return <>{mediaType}</>;
};

export default MovieList;
