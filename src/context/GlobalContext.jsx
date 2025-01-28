import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;

function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);
}
