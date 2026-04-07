import React from "react";
import ProductList from "./pages/ProductList";
import CartIcon from "./pages/CartIcon";
export default function App() {
  return (
    <div className="app-shell">
      <div className="app-header">
        <h1>Giỏ Hàng (Chương 8)</h1>
        <p>Thêm sản phẩm và xem số item trong giỏ hàng ngay lập tức.</p>
      </div>
      <div className="app-grid">
        <ProductList />
        <CartIcon />
      </div>
    </div>
  );
}

