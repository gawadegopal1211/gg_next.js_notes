import React from 'react'
import { arr } from './arr'
import Link from 'next/link'

export default function ParallelIntercepting() {
    return (
        <div>
            {arr.map((v) => {
                return (
                    <Link href={`/parallel-intercepting/${v.id}`} key={v.id}>
                        <div>
                            <h3>{v.name}</h3>
                            <p>{v.description}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
