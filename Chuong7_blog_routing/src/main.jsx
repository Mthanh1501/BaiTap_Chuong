import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Hàm createRoot() khởi tạo "root" và gắn ứng dụng React vào phần tử HTML có id="root"
// Sau đó gọi .render() để hiển thị nội dung App bên trong BrowserRouter
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
