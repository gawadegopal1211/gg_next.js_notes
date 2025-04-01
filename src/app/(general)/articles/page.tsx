'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Articles = () => {
    const router = useRouter();

    return (
        <div>
            <h2>Read Articles in:</h2>
            <ul>
                <li>
                    <Link href={`/articles/1?lang=en`}>English</Link>
                </li>
                <li>
                    <Link href={`/articles/2?lang=mr`}>Marathi</Link>
                </li>
                <li>
                    <Link href={`/articles/3?lang=hi`}>Hindi</Link>
                </li>
            </ul>

            <h3 onClick={() => router.push('/')}>Go to home</h3>
        </div>
    )
}

export default Articles
