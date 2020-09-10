import Header from './header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="font-Montserrat w-full xl:max-w-6xl mx-auto">{children}</main>
        </>
    )
}