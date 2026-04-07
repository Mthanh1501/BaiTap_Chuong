import React from 'react'
import { useParams } from 'react-router-dom'
// Tạo danh sách các bài viết
// Mỗi bài viết có id, tiêu đề và nội dung
const posts = {
    '1': { title: 'Bài 1', body: 'Nội dung 1' },
    '2': { title: 'Bài 2', body: 'Nội dung 2' },
    '3': { title: 'Bài 3', body: 'Nội dung 3' }
}
export default function PostDetailPage() {
    // Dùng hook useParams() để lấy tham số postId từ URL
    const { postId } = useParams();
    // Tìm bài viết tương ứng với postId trong danh sách posts
    const post = posts[postId];
    // Nếu không tìm thấy bài viết, hiển thị thông báo lỗi
    if (!post)
        return <div className='card'>Không tìm thấy bài viết.</div>;
    // Nếu tìm thấy, hiển thị tiêu đề và nội dung của bài viết
    return (
        <div className='card'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}
