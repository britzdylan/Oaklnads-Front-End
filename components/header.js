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
        <img src="./Logo.png" width="150px" alt="Oaklands Furniture and Design" className="lg:mx-auto" />
      </div>

      <div className="w-auto  hidden lg:block ">
        <nav>
          <ul className="flex flex-row justify-between w-full">
            <li className="mr-10 hover:font-bold text-gray-600 hover:text-gray-800 tracking-wide transition-all"><Link href="/catalogue">Catalogue</Link></li>
            <li className="mr-10 hover:font-bold text-gray-600 hover:text-gray-800 tracking-wide transition-all"><Link href="/booking">Booking</Link></li>
            <li className="mr-0 cursor-pointer hover:font-bold text-gray-600 hover:text-gray-800 tracking-wide transition-all"><Link href="/quote"><AiOutlineShoppingCart size='2em' /></Link></li>
          </ul>
        </nav>
      </div>

      <div class="block lg:hidden flex flex-row items-center">
        <AiOutlineSearch size='1.5em' />
        <button class="flex items-center px-3 py-2 border rounded text-grey-200 border-none">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
    </header>
  )
}
