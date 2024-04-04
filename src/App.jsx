import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Components/Page";
import { cartReducer, initialState } from "./Reducer/CartReducer";
import { MovieContext, ThemeContext } from "./context";

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
