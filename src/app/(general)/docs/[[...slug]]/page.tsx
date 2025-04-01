import React from 'react'

export const metadata = {
    title: {
        absolute: "Documents by Gopal Gawade"
    }
}

const page = async ({ params }: {
    params: Promise<{ slug: string[] }>
}) => {
    const { slug } = await params;

    if (slug?.length === 2) {
        return (
            <div>
                <h2>Viewing documents for feature {slug[0]} and concept for {slug[1]}</h2>
            </div>
        )
    }
    else if (slug?.length === 1) {
        return (
            <div>
                <h2>Viewing documents for feature {slug[0]}</h2>
            </div>
        )
    }
    return (
        <div>
            <h2>Documents</h2>
        </div>
    )
}

export default page
