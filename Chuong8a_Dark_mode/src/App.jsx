import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <div className="app-top">
          <div>
            <h1 className="app-title">Dark Mode Demo</h1>
            <p className="app-subtitle">
              Thỏa sức chuyển đổi giao diện giữa sáng và tối với trải nghiệm mượt mà.
            </p>
          </div>
          <Navbar />
        </div>

        <div className="section">
          <div className="card">
            <Home />
          </div>

          <div className="card theme-card">
            <span>Hướng dẫn sử dụng</span>
            <div className="theme-state">Bấm nút để chuyển ngay giữa hai theme.</div>
            <p>
              Chế độ tối giúp giảm mỏi mắt khi dùng ban đêm và tăng độ tương phản cho giao diện.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}


