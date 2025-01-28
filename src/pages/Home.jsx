import MovieList from "../components/MovieList";
import ShowList from "../components/ShowList";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <div className="container my-4">
          <div className="row">
            <h1>Movies:</h1>
            <MovieList />
          </div>
          <div className="row">
            <h1>Shows:</h1>
            <ShowList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
