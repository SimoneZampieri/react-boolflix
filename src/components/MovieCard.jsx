import RatingSys from "./RatingSys";

const MediaCards = ({ media }) => {
  const rating = Math.floor(media.vote_average);

  const flags = {
    it: "lang-flags/italian.png",
    en: "lang-flags/english.png",
  };

  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="img-fluid" src="" alt="" />
        <div className="card-body">
          <h5 className="card-text">Titolo: {media.title}</h5>
          <p className="card-text">Titolo originale: {media.original_title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w200${media.poster_path}`}
            alt=""
          />
          <img
            src={flags[media.original_language]}
            alt={media.original_language}
          />
          <RatingSys vote={media.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default MediaCards;
