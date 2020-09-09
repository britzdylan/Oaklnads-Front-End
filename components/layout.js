import Header from './header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="font-Montserrat xl:max-w-6xl mx-auto">{children}</main>
        </>
    )
}