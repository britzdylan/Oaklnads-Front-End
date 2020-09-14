import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchField() {

    return (
        <form className="w-full max-w-sm ">
            <div className="flex items-center border-b border-grey-500 py-2 text-black">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Anything..." aria-label="Search Anything" />
                <AiOutlineSearch size='1.5em' />
            </div>
        </form >
    )
}