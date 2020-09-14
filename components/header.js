import Link from 'next/link'
import SearchField from './search'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <header className="flex flex-row place-content-center font-Montserrat xl:max-w-6xl m-auto py-10  items-center px-10">

      <div className="hidden lg:block ">
        <SearchField />
      </div>

      <div className="flex-grow">
        <Link href="/"><img src="/Logo.png" width="150px" alt="Oaklands Furniture and Design" className="lg:mx-auto cursor-pointer" /></Link>
      </div>

      <div className="w-auto  hidden lg:block ">
        <nav>
          <ul className="flex flex-row justify-between w-full">
            <Link href="/catalogue"><li className="mr-10  text-gray-600 hover:text-black hover:scale-105 transform tracking-wide transition-all duration-500 ease-in-out">Catalogue</li></Link>
            <Link href="/booking"><li className="mr-10  text-gray-600 hover:text-black hover:scale-105 transform tracking-wide transition-all duration-500 ease-in-out">Booking</li></Link>
            <Link href="/quote"><li className="mr-0 cursor-pointer  text-gray-600 hover:text-black hover:scale-105 transform tracking-wide transition-all duration-500 ease-in-out"><AiOutlineShoppingCart size='2em' /></li></Link>
          </ul>
        </nav>
      </div>

      <div className="block lg:hidden flex flex-row items-center">
        <AiOutlineSearch size='1.5em' />
        <button className="flex items-center px-3 py-2 border rounded text-grey-200 border-none">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
    </header>
  )
}
