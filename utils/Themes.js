import React from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('current-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
    }
    return 'light';
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(existing);

        localStorage.setItem('current-theme', existing);
    };

    if (initialTheme) {
        checkTheme(initialTheme);
    }

    React.useEffect(() => {
        checkTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <>
            {theme === "dark" ? (
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="button w-max p-1 bg-skin-inverted">
                    dark
                </button>
            ) : (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>light</button>
            )}
        </>
    );
};