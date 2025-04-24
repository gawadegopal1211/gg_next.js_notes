import React from 'react';

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
}

export default async function page() {
    const fetchFunc = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await fetchFunc.json();

    return (
        <div>
            <h2>Fetch Data</h2>

            <ol>
                {users.map((v) => {
                    return (
                        <li key={v.id}>{v.username} | {v.email}</li>
                    )
                })}
            </ol>
        </div>
    )
}
