import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className="navbar">
      <button className="button" onClick={toggleTheme}>
        {theme === "dark" ? "Chuyển sang Light" : "Chuyển sang Dark"}
      </button>
    </div>
  );
}
