import Link from 'next/link';
import React, { use } from 'react'

const ArticleId = ({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang: 'en' | 'mr' | 'hi' }>
}) => {

    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);

    return (
        <div>
            <h2>Article in {lang}</h2>
            <ul>
                <li>
                    <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                </li>
                <li>
                    <Link href={`/articles/${articleId}?lang=mr`}>Marathi</Link>
                </li>
                <li>
                    <Link href={`/articles/${articleId}?lang=hi`}>Hindi</Link>
                </li>
            </ul>
        </div>
    )
}

export default ArticleId
