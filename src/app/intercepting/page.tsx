import Link from 'next/link'
import React from 'react'

export default function Intercepting() {
    return (
        <div>
            <h3>Page A</h3>
            <Link href={'/intercepting/intercepting2'}>
                Go
            </Link>

            <Link href={'/intercepting3'}>
                Go...
            </Link>
        </div>
    )
}
