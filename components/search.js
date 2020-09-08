import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchField() {

    return (
        <form class="w-full max-w-sm">
            <div class="flex items-center border-b border-teal-500 py-2 text-black">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Anything..." aria-label="Search Anything" />
                <AiOutlineSearch size='1.5em' />
            </div>
        </form >
    )
}