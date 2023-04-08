import { createContext } from "react"


export interface ThemeContextType  {
    theme : string,
    toggleTheme : Function
}


const ThemeContext = createContext(
    {
        theme: "light",
        toggleTheme: () => {}
    }
)

export default ThemeContext;