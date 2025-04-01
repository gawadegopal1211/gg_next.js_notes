'use client';

import React, { useState } from 'react';

interface WrapperProps {
    children: React.ReactNode
}

const ErrorSimulator = ({
    message = "An error occurred"
}: {
    message?: string
}) => {
    const [err, setErr] = useState(false);

    if (err) {
        throw new Error(message);
    }

    return (
        <div>

            <button onClick={() => { setErr(true) }}>
                Simulate Error
            </button>
        </div>
    )
}

const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div>
            <ErrorSimulator />

            {children}
        </div>
    )
}

export default ErrorWrapper
