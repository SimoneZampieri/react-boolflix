import flags from "./LanSelect";

const ShowCards = ({ media }) => {
  const rating = Math.floor(media.vote_average);
  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="img-fluid" src="" alt="" />
        <div className="card-body">
          <h5 className="card-text">Titolo: {media.original_name}</h5>
          <p className="card-text">Titolo originale: {media.original_title}</p>
          <p>
            <img src={flags[original_language]} alt={media.original_language} />
          </p>
          <p>Voto: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCards;
