import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;

function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get(apiKey).then((res) => {
      setMovies(res.data);
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
