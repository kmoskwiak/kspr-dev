import { ThemeProvider, Theme as ThemeType } from "@emotion/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { THEME_CHANNEL } from "./ThemeBroadcastChannel";
import { DEFAULT_THEME, themeConfiguration } from "./theme";
import { getCurrentThemeNameFromStorage, setCurrentThemeInStorage, toggleCurrentThemeInStorage } from "./theme.storage";

export const THEME_UPDATE_EVENT = 'THEME_UPDATED';

export const toggleThemeBroadcast = () => {
    const channel = new BroadcastChannel(THEME_CHANNEL);
    toggleCurrentThemeInStorage();
    channel.postMessage({ type: THEME_UPDATE_EVENT });
}

export const ThemeToggleContext = createContext({
    currentTheme: DEFAULT_THEME,
});

export const ThemeToggleProvider = ({ children, theme, themeName }: { children?: ReactNode, theme?: ThemeType, themeName?: 'light' | 'dark' }) => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(themeName ?? theme?.name ?? getCurrentThemeNameFromStorage());
    const [currentThemeValue, setCurrentThemeValue] = useState(themeConfiguration[currentTheme]);

    useEffect(() => {
        const channel = new BroadcastChannel(THEME_CHANNEL);
        if (theme && theme.name) {
            setCurrentThemeInStorage(theme.name);
        } else {
            setCurrentThemeInStorage(currentTheme);
        }
        channel.postMessage({ type: THEME_UPDATE_EVENT });
        return () => {
            channel.close();
        }
    }, [theme]);

    useEffect(() => {
        const channel = new BroadcastChannel(THEME_CHANNEL);
        channel.onmessage = (event) => {
            if (event.data.type === THEME_UPDATE_EVENT) {
                const themeName = getCurrentThemeNameFromStorage();
                setCurrentTheme(themeName);
                setCurrentThemeValue(themeConfiguration[themeName])
            }
        }

        return () => {
            channel.close();
        }
    }, []);

    return (
        <ThemeToggleContext.Provider value={{ currentTheme }}>
            <ThemeProvider theme={currentThemeValue}>
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    )
}

export const Theme = ({ children, themeName }: { children: ReactNode, themeName?: 'light' | 'dark' }) => {
    return (
        <ThemeToggleProvider themeName={themeName}>
            {children}
        </ThemeToggleProvider>
    )
}