import React from 'react'

const Register = () => {
    const getNumber = (num: number): number => {
        return Math.floor(Math.random() * num)
    }

    const random = getNumber(2)

    if (random === 1) {
        throw new Error("Error loading review");
    }

    return (
        <div>
            <h2>Register</h2>
            <p>Random Id: {random}</p>
        </div>
    )
}

export default Register
