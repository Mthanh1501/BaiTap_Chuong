import React, { useEffect } from 'react'
export default function Modal({ isOpen, onClose, children }) {
  // useEffect: xử lý side-effect khi modal mở, nhấn phím Escape để đóng modal
  useEffect(() => {
    if (!isOpen) return

    // Hàm xử lý khi người dùng nhấn phím
    function onKey(e) {
      // Nếu nhấn phím Escape thì gọi hàm đóng modal
      if (e.key === 'Escape') onClose()
    }

    // Gắn event listener khi modal mở
    document.addEventListener('keydown', onKey)
    
    // Cleanup: gỡ bỏ event listener khi modal đóng hoặc component bị unmount
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Nếu modal đang đóng, không render gì cả
  if (!isOpen) return null
  return (
    // Lớp overlay (nền mờ phía sau modal), click bên ngoài → đóng modal
    <div className='modal-overlay' onClick={onClose}>
       {/* ngăn click lan ra ngoài */}
      <div className='modal' onClick={e => e.stopPropagation()}>
        {children}
        {/* Khu vực chứa nút đóng */}
        <div className='modal-actions'>
          <button className='button' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

