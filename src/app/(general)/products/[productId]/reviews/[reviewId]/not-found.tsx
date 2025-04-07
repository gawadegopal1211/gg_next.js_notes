"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const NotFound = () => {
    const pathname = usePathname();

    const reviewId = pathname?.split('/')[4];
    
    return (
        <div>
            <h2>REVIEW {reviewId} NOT FOUND</h2>
        </div>
    )
}

export default NotFound
