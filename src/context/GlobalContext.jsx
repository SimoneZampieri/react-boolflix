import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;

function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = (searchTerm) => {
    axios
      .get(`${apiKey}&query=${searchTerm}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  return (
    <GlobalContext.Provider value={{ movies, setMovies, fetchMovies }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };
