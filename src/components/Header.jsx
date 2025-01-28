import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { fetchMovies } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");

  const searchHand = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BoolFlix</a>
          <form className="d-flex" role="search" onSubmit={searchHand}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
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
