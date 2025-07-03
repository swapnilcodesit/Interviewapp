import "./App.css";
import Login from "./app/Login";
import Home from "./pages/Home";

import { ThemeProvider,  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useReducer } from "react";
import { lightTheme, theme } from "./constants/Constant";



const initialState = {
  theme: theme,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state , theme : action.payload ? theme : lightTheme };
    default : 
    return {...state}  
  }
};

export const ThemeContext = createContext();

function App() {
  const [themeState, themeDispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext value={{ themeState, dispatch: themeDispatch }}>
      <ThemeProvider theme={themeState.theme}>
        <CssBaseline />
        <div>
          <Home />
        </div>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
//  <div className="App">
//       check changes
//       <Login/>
//       <Hooks/>
//     </div>
