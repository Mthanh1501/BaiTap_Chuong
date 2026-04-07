import React from 'react'; import ApiFetcher from './pages/ApiFetcher'; export default function App() { return (<div style={{ padding: 16 }}><h1>Trình lấy API</h1><ApiFetcher /></div>) }


function deletePost(id, setPosts) {
    fetch(`https://api.example.com/posts/${id}`, {
        method: "DELETE"
    })
        .then(res => {
            if (!res.ok) throw new Error("Xóa thất bại");
            // Xóa thành công, cập nhật state
            setPosts(prev => prev.filter(post => post.id !== id));
        })
        .catch(err => console.error(err));
}



