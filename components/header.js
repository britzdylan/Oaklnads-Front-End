import Link from 'next/link'
import SearchField from './search'
const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <header className="flex flex-row justify-between xl:max-w-6xl m-auto py-10 items-baseline">
      <div>
        <SearchField />
      </div>
      <div>
        <img src="" alt="Oaklands Furniture and Design" className="" />
      </div>
      <div className="w-auto">
        <nav>
          <ul className="flex flex-row justify-between w-full">
            <li className="mr-10">Catalogue</li>
            <li className="mr-10">My Quote</li>
            <li className="mr-10">Make a booking</li>
          </ul>

        </nav>
      </div>
    </header>
  )
}
