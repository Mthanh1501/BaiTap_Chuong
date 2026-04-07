import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Layout() {
    // Hàm active để xác định className cho NavLink dựa trên trạng thái isActive
    const active = ({ isActive }) => isActive ? 'navlink active' : 'navlink'
    return (
        <div>
            {/* Thanh header điều hướng */}
            <header className='header'>
                <NavLink to='/' className={active}>Home</NavLink>
                <NavLink to='/about' className={active}>About</NavLink>
            </header>
            {/* Hiển thị nội dung của các route con */}
            <Outlet />
        </div>
    )
}
