import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchMovies } = useGlobalContext();

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
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
