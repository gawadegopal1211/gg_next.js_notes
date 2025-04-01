import React from 'react'

const ProductDetailsLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            {children}
            <h3>Featured Products</h3>
        </div>
    )
}

export default ProductDetailsLayout
