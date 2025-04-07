import Modal from '@/components/modal'
import React from 'react'

export default async function Article({ params }: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return (
        <Modal>
            <h2>Article {id} intercepting...</h2>
        </Modal>
    )
}
