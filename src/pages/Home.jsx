import { useGlobalContext } from "../context/GlobalContext";

const HomePage = () => {
  const { movies } = useGlobalContext();

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
            </div>
          ))
        ) : (
          <p>Nessun film trovato</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
