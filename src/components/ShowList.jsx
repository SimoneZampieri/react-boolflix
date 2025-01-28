import { useGlobalContext } from "../context/GlobalContext";
import ShowCards from "./ShowCard";

const ShowList = () => {
  const { shows } = useGlobalContext();

  const mediaType = shows.map((media) => (
    <ShowCards key={media.id} media={media} />
  ));
  return <>{mediaType}</>;
};

export default ShowList;
