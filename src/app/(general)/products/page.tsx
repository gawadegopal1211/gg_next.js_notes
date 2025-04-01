import React from 'react'
import Link from 'next/link'

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <p>
        <Link href={'products/1'}>Product 1</Link>
      </p>

      <p>
        <Link href={'products/2/reviews/10'}>Product 2</Link>
      </p>
    </div>
  )
}

export default Products
