import React from 'react'
import { Link } from 'react-router-dom'
//Tạo mảng posts chứa danh sách bài viết với id và tiêu đề
const posts = [
    { id: '1', title: 'Bài 1' },
    { id: '2', title: 'Bài 2' },
    { id: '3', title: 'Bài 3' }
]

export default function HomePage() {
    return (
        <div className='card'>
            {/* Tiêu đề trang */}
            <h1>Chương 7</h1>
            {/* Tạo danh sách các bài viết */}
            <ul>
                {/* Duyệt qua từng phần tử trong mảng posts bằng hàm map */}
                {posts.map(p =>
                    <li key={p.id}>
                        <Link to={'/post/' + p.id}>{p.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
