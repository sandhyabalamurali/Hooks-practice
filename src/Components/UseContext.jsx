import React, { createContext, useState, useContext } from "react";
import "../Styles/UseContext.css";

const ThemeContext = createContext();

export default function UseContext() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container theme-${theme}`}>
        <h1>Theme Switcher</h1>
        <ThemeButton />
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
}
