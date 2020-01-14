import React, { useReducer } from "react";
import LightTheme from "./light-theme";
import DarkTheme from "./dark-theme";
const initState = {
    light: true,
    theme: LightTheme
}
const themeReducer = (prevState, action) => {
    switch(action.type) {
        case "TOGGLE":
            const theme = !prevState.light ? LightTheme : DarkTheme;

            return {
                ...prevState,
                light: !prevState.light,
                theme: theme
            }
        default: return { ...prevState }
    }
}
const ThemeContext = React.createContext(initState);
const  ThemeControlProvider = (props) =>  {
 const [stateTheme, dispatch] = useReducer(themeReducer, initState);
 return (
    <ThemeContext.Provider value={{stateTheme, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeControlProvider };