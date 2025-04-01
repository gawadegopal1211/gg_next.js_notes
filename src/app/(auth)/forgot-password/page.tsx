import React from 'react'

const ForgotPassword = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('');
        },2000)
    });
    
    return (
        <div>
            <h2>Forgot Password</h2>
        </div>
    )
}

export default ForgotPassword
