import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
  { id: "p1", name: "Sản phẩm A" },
  { id: "p2", name: "Sản phẩm B" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id} className="product-row">
          <div>{p.name}</div>
          <button className="button" onClick={() => dispatch(addToCart(p))}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}
