import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Product ${id}`)
        }, 1000);
    })

    return {
        title: `Product: ${title}`,
        description: "Most trusted brand"
    }
}

const ProductDetail = async ({ params }: Props) => {
    const product = (await params).productId

    if (parseInt(product) > 100) {
        notFound();
    }
    return (
        <div>
            <h3>Product: {product}</h3>
        </div>
    )
}

export default ProductDetail
