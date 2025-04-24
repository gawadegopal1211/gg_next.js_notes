'use client';

import React, { useEffect } from 'react'

export default function error({ error }: {
    error: Error
}) {
    useEffect(()=>{
        console.log(error);
    },[]);

    return (
        <div>
            <p>Error!</p>
        </div>
    )
}
