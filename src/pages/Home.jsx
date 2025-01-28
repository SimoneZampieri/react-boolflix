import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <div className="container my-4">
          <div className="row">
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
