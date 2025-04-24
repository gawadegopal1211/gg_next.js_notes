import Link from 'next/link'
import { Suspense } from 'react';

const Links = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('');
            console.log('Hello!');
        }, 3000)
    });

    return (
        <div>
            <Link href={'newproducts/1'}>Product 1</Link>
            <Link href={'newproducts/2'}>Product 2</Link>
            <Link href={'newproducts/3'}>Product 3</Link>
        </div>
    )
}

export default async function NewProducts() {
    return (
        <div>
            <h2>generateStaticParams</h2>
            <h3>Products</h3>

            <Suspense fallback={<p>Loading...</p>}>
                <Links />
            </Suspense>
        </div>
    )
}
