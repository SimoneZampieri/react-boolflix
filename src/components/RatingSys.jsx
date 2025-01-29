const RatingSys = ({ vote }) => {
  let rating = "";

  if (vote === 0) {
    rating = (
      <>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (vote === 1) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (vote === 2) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (vote === 3) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (vote === 4) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (vote === 5) {
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
