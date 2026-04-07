import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function ApiFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!cancelled) {
          setData(res.data);
          setLoading(false)
        }
      }).catch(err => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false)
        }
      }); return () => { 
        cancelled = true }
  }, [])
  if (loading) 
    return <div className='card'>Đang tải...</div>
  if (error) 
    return <div className='card'>Lỗi: {error}</div>
  return (
  <div className='card'><h3>Users</h3>
    <ul>{data && data.map(u => 
      <li key={u.id}>{u.name} - {u.email}</li>)}
    </ul>
  </div>
  )
}
