import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'GraphQl and Next.js',
    description: 'Making sure my graphql is working',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className='max-container'>
            {children}
        </section>
    )
}