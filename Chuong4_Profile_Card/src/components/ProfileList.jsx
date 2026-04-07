import React from 'react'
import ProfileCard from './ProfileCard'

// Tạo mảng dữ liệu mẫu gồm 3 người dùng (users)
// Mỗi phần tử là 1 object có id, name, avatarUrl, jobTitle và trạng thái isOnline
const users = [
  { id: 'u1', name: 'Van Thanh', avatarUrl: 'https://i.pravatar.cc/150?img=1', jobTitle: 'Frontend Dev', isOnline: true },
  { id: 'u2', name: 'Hoang Nhat', avatarUrl: 'https://i.pravatar.cc/150?img=2', jobTitle: 'Designer', isOnline: false },
  { id: 'u3', name: 'Mai Huong', avatarUrl: 'https://i.pravatar.cc/150?img=3', jobTitle: 'Designer', isOnline: true },
  { id: 'u4', name: 'Kieu Huong', avatarUrl: 'https://i.pravatar.cc/150?img=4', jobTitle: 'Backend Dev', isOnline: false }

]
export default function ProfileList(){ 
  return (
    <div>
      {/* Tiêu đề danh sách */}
      <h2>Profile List</h2>

      {/* Duyệt qua mảng users bằng map() và render ra nhiều ProfileCard */}
      {/* Mỗi ProfileCard nhận props user để hiển thị thông tin riêng */}
      {/* Sử dụng user.id làm key để React quản lý hiệu quả */}
      {users.map(u=> <ProfileCard key={u.id} user={u}/>)}
    </div>
  )
}