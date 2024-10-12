import { themeConfiguration } from "./theme";

export const THEME_STORE_KEY = 'theme';

const getWindow = (): Partial<Window> => {
    if (typeof window === 'undefined') {
        return {}
    }
    return window;
}

export const getCurrentThemeNameFromStorage = (): keyof typeof themeConfiguration => {
    const cookies = getWindow()?.document?.cookie?.split(';') ?? [];
    const themeCookie = cookies.find(cookie => cookie.trim().startsWith(THEME_STORE_KEY));
    const themeName = themeCookie ? themeCookie.split('=')[1] : undefined;
    return themeName === 'light' ? 'light' : 'dark';
}

export const setCurrentThemeInStorage = (theme?: string) => {
    if (getWindow()?.document?.cookie) {
        getWindow().document.cookie = `${THEME_STORE_KEY}=${theme}; path=/`;
    }
    getWindow()?.document?.documentElement?.setAttribute('data-theme', theme);

    const root = getWindow()?.document?.querySelector(':root');
    if (root) {
        Object.entries(themeConfiguration[theme].colors).forEach(([key, value]) => {
            if (typeof value === 'string') {
                // @ts-ignore
                root.style.setProperty(`--colors-${key}`, value);
            }
        });
    }
}

export const toggleCurrentThemeInStorage = () => {
    const themeName = getCurrentThemeNameFromStorage();
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setCurrentThemeInStorage(newTheme);
}