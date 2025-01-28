import { useGlobalContext } from "../context/GlobalContext";
import ShowCards from "./ShowCard";

const ShowList = () => {
  const { movies } = useGlobalContext();

  const mediaType = movies.map((media) => (
    <ShowCards key={media.id} media={media} />
  ));
  return <>{mediaType}</>;
};

export default ShowList;
