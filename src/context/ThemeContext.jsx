import React, {
    createContext,
    useContext,
    useMemo,
    useState,
    useEffect,
} from "react";
import createAppTheme from "../themes";
import { applyCssVars } from "../themes/colors/applyCssVars";

const ThemeContext = createContext(null);

export const ThemeProviderCustom = ({ children }) => {
    const [mode, setMode] = useState(
        () => localStorage.getItem("themeMode") || "dark"
    );

    useEffect(() => {
        applyCssVars(mode); // 🔥 SATU PINTU
        document.documentElement.dataset.theme = mode;
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode(prev => (prev === "dark" ? "light" : "dark"));
    };

    const theme = useMemo(() => createAppTheme(mode), [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            {children(theme)}
        </ThemeContext.Provider>
    );
};

export const useThemeMode = () => useContext(ThemeContext);
