import RatingSys from "./RatingSys";
import { useState } from "react";

const MediaCards = ({ media }) => {
  const rating = Math.ceil(media.vote_average / 2);
  const [isHovered, setIsHovered] = useState(false);

  const flags = {
    it: "lang-flags/italian.png",
    en: "lang-flags/english.png",
  };

  return (
    <div className="col-4 p-3">
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="img-fluid immagine"
          src={`https://image.tmdb.org/t/p/w200${media.poster_path}`}
          alt={`Poster of ${media.title}`}
        />
        {isHovered && (
          <div className="card-body cardbodi">
            <h5 className="card-text">Titolo: {media.title}</h5>
            <div className="imgcont">
              <img
                className="bandierina"
                src={flags[media.original_language]}
                alt={media.original_language}
              />
            </div>
            <RatingSys vote={rating} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCards;
