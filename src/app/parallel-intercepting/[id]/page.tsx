import React from 'react'

export default async function Article({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return (
        <div>
            <h2>Article {id}</h2>
        </div>
    )
}
