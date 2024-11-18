import { createContext } from "react";
import { Colors } from "../constants/Colors";


export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {


    const theme = Colors.light;

return(

    <ThemeContext.Provider value={{theme}}>
        {children}
    </ThemeContext.Provider>
)
}