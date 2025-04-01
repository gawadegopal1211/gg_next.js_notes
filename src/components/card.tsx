import React from 'react'

export default function Card({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className='shadow-md p-2 m-2'>
            {children}
        </div>
    )
}
