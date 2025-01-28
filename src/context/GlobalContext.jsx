import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;

function GlobalProvider({ children }) {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };
