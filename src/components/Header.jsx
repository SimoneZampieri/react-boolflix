import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { fetchMovies, fetchShows } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");

  const searchHand = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
    fetchShows(searchTerm);
  };

  return (
    <header>
      <nav className="navbar bg-dark text-bg-dark">
        <div className="container-fluid">
          <img src="./assets/logo.png" alt="BoolFlix" />
          <form className="d-flex" role="search" onSubmit={searchHand}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
