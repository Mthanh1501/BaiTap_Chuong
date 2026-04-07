import React from "react";
import { useSelector } from "react-redux";

export default function CartIcon() {
  const count = useSelector((s) => s.cart.items.length);
  return (
    <div className="card">
      <h3>Cart</h3>
      <div className="cart-count">🛒 {count}</div>
      <div className="cart-note">Số sản phẩm trong giỏ của bạn sẽ cập nhật ngay khi thêm.</div>
    </div>
  );
}
