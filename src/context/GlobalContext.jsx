import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;

function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]); // New state for shows

  const fetchMovies = (searchTerm) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    axios
      .request(options)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const fetchShows = (searchTerm) => {
    // New function to fetch shows
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/tv?query=${searchTerm}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    axios
      .request(options)
      .then((res) => {
        setShows(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
      });
  };

  return (
    <GlobalContext.Provider
      value={{ movies, setMovies, fetchMovies, shows, setShows, fetchShows }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };
