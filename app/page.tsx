import Link from "next/link"
import ProductCard from "./components/products/ProductCard"

export default function HomePage() {
    return (
        <main>
            <div className="">Hello world</div>
            <div className="">
                <ProductCard />
            </div>
            <div className="">
                <Link href="/users" className="font-bold text-sm text-blue-600">Users</Link>
            </div>
        </main>
    )
}