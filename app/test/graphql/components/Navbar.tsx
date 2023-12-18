import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex">
            <div className="">
                <Link href="/test/graphql/games">Games</Link>
            </div>
        </nav>
    )
}