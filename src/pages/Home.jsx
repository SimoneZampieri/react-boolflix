import MovieList from "../components/MovieList";
import ShowList from "../components/ShowList";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="container my-4">
          <div className="row">
            <h1 className="titles">Movies:</h1>
            <MovieList />
          </div>
          <div className="row">
            <h1 className="titles">Shows:</h1>
            <ShowList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
