import { useState } from "react";

export default function ProductList() {
  // State แค่ 2 ตัว
  const [products] = useState([
    { id: 1, name: "iPhone", inStock: true },
    { id: 2, name: "iPad", inStock: false },
    { id: 3, name: "MacBook", inStock: true },
    { id: 4, name: "AirPods", inStock: false }
  ]);

  const [inStockOnly, setInStockOnly] = useState(false);

  // คำนวณสด ไม่เก็บเป็น state
  const visibleProducts = inStockOnly
    ? products.filter((p) => p.inStock)
    : products;

  return (
    <div>
      <h2>Products</h2>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        แสดงเฉพาะที่มีของ
      </label>

      <ul>
        {visibleProducts.map((product) => (
          <li key={product.id}>
            {product.name}
            {!product.inStock && "(ไม่มีสินค้าจ้าาาา)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
