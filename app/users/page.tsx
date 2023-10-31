import Link from "next/link"
import {sort} from 'fast-sort'

type userType = {
    id: number;
    name: string;
    username: string;
    email: string;
}
type userPageProps = {
    searchParams: {sortBy: 'name'|'email'}
}

export default async function UsersPage({searchParams: {sortBy}}: userPageProps) {
    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {'cache': 'no-store'}) // don't store cache
    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {'cache': 'no-cache'}) // don't cache
    // const users = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } }) // cache and then revalidate the cache every 10s
    const users: userType[] = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    let sorted = users

    if (sortBy === 'name') {
        sorted = sort(sorted).asc(u => u.name);
    } else if (sortBy === 'email') {
        sorted = sort(sorted).asc(u => u.email);
    }
    /**
        teachers solution
        const sortedUsers = sort(users).asc(
            sortBy === 'name'
            ? (user) => user.name
            : (user) => user.email
        )
     */

    return (
        <section className="p-5">
            <div className="flex space-x-5 items-baseline">
                <div className="text-3xl"><h2>Users</h2></div>
                <div className="">
                    <Link href="/" className="font-bold text-sm text-blue-600">Back home</Link>
                </div>
            </div>

            <div className="flex text-xl font-semibold mt-8 border-b py-3 mb-2">
                <div className="w-2/4">
                    <Link href="/users?sortBy=name">Name</Link>
                </div>
                <div className="w-2/4">
                    <Link href="/users?sortBy=email">Email</Link>
                </div>
            </div>
            <div className="">
                {
                    sorted.map(ech => {
                        return (
                            <div key={`${ech.id}-${ech.username}`} className="flex justify-between py-4 border-b font-medium">
                                <div className="w-2/4">{ech.name}</div>
                                <div className="w-2/4">{ech.email}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}