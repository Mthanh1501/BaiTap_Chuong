import React, { useState } from 'react'
import Modal from './components/Modal'
export default function App() {
  //useState quản lý trạng thái mở/đóng modal
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ padding: 16 }}>
      <h1>Modal (Chương 6)</h1>
      {/* Nút mở modal: khi click sẽ mở modal */}
      <button className='button' onClick={() => setIsOpen(true)}>Open Modal</button>
      {/* Gọi component modal và truyền props:
          - isOpen: trạng thái mở
          - onClose: đóng modal
          - children: nội dung modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is modal content.</p>
        <p>Press Escape or click outside to close.</p>
      </Modal>
    </div>
  )
}
