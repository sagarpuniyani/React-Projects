import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'dark',
    darktheme : () => {},
    lighttheme : ()=> {}
})

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext)
}