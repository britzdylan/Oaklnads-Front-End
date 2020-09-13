import Link from 'next/link'


export default function HeadSectio({ Title }) {

    return (
        <div className="flex flex-row justify-between w-full items-center p-10 bg-gray-200 mb-20">
                <h1 className="text-2xl font-bold">{Title}</h1>
                <p className="text-sm text-gray-600 tracking-wider"><Link href="/">HOME</Link> / {Title.toUpperCase()}</p>
            </div>
    )
}