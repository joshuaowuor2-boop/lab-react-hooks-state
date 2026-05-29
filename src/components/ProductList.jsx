import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, cartItems, onAddToCart }) => {
  const filtered =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div>
      <h2>Available Products</h2>
      {filtered.length === 0 ? (
        <p>No products available</p>
      ) : (
        filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList
