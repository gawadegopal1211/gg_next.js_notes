import React from 'react';
import { notFound, redirect } from 'next/navigation';

const ReviewId = async ({ params }: {
    params: Promise<{ productId: string, reviewId: string }>
}) => {
    const product = (await params).productId;
    const review = (await params).reviewId;

    if (parseInt(review) > 5) {
        notFound();
        //redirect('/products')
    }
    
    return (
        <div>
            <h2>Product {product}</h2>
            <p>Review {review}</p>
        </div>
    )
}

export default ReviewId
