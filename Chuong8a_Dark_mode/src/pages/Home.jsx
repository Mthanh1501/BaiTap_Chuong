import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Chủ đề hiện tại: {theme === "dark" ? "Dark Mode" : "Light Mode"}</h1>
      <p>
        Chế độ {theme === "dark" ? "tối" : "sáng"} đang được áp dụng cho toàn bộ layout.
      </p>
    </div>
  );
}


