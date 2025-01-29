const RatingSys = (media) => {
  const vote = media.vote_average;
  const dividedVote = Math.ceil(vote / 2);

  let rating = "";

  if (dividedVote === 0) {
    rating = (
      <>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (dividedVote === 1) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (dividedVote === 2) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (dividedVote === 3) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (dividedVote === 4) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (dividedVote === 5) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
      </>
    );
  }

  return <div>{rating}</div>;
};

export default RatingSys;
