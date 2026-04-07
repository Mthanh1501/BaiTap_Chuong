import React, { useState } from 'react'
export default function ProfileCard({ user }){
  // Khai báo state "following" để lưu trạng thái của nút "Follow"
  // Giá trị mặc định là false (chưa theo dõi)
  const [following, setFollowing] = useState(false)
  return (
    <div className="card">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        {/* Ảnh đại diện của user */}
        <img src={user.avatarUrl} alt={user.name} style={{width:64,height:64,borderRadius:8}}/>
        {/* Khu vực hiển thị thông tin user */}
        <div style={{flex:1}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <span className="online-badge" style={{background: user.isOnline ? '#2e7d32' : '#9e9e9e'}} 
            title={user.isOnline ? 'Online' : 'Offline'} />
            <strong>{user.name}</strong>
          </div>
          <div style={{fontSize:12,color:'#555'}}>{user.jobTitle}</div>
        </div>
         {/* Nút Follow / Following */}
        <button className={`button ${following ? 'button-following' : 'button-follow'}`} 
          onClick={() => setFollowing(f => !f)}>{following ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  )
}
