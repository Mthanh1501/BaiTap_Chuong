import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostDetailPage from './pages/PostDetailPage'

export default function App(){
  return (
    // Thẻ <Routes> chứa toàn bộ cấu trúc route
    <Routes>
      {/* Route cha (layout) – bao bọc toàn bộ các route con */}
      {/* Khi vào bất kỳ đường dẫn nào trong đây, Layout sẽ luôn được hiển thị */}
      <Route path="/" element={<Layout/>}>

        {/* Route con đầu tiên (index): hiển thị HomePage khi path chính là "/" */}
        <Route index element={<HomePage />} />

        {/* Route con thứ hai: "/about" hiển thị trang AboutPage */}
        <Route path="about" element={<AboutPage />} />

        {/* Route động: "/post/:postId" hiển thị chi tiết bài viết */}
        {/* useParams() trong PostDetailPage sẽ lấy giá trị postId từ URL */}
        <Route path="post/:postId" element={<PostDetailPage />} />

      </Route>
    </Routes>
  )
}
