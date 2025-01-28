import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Layout from "./layout/DefLay";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes component={Layout}>
            <Route path="/" component={HomePage} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
