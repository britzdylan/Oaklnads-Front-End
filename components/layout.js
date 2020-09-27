import Header from './header'
import Footer from './footer'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
      }
    
    return (
        <>
            <Header />
            <main className="font-Montserrat w-full xl:max-w-6xl mx-auto">{children}</main>
            <Footer />
        </>
    )
}