import Layout from '../components/layout'
import React, { useState } from 'react';
import { getQuotes } from '../lib/api'
import Link from 'next/link'
const key = "Oaklands!01"

const quotes = [{

}]

export default function Admin({ allQuotes }) {
    const [pass, setPass] = useState('')
    const [correct, setCorrect] = useState(false)
    const [msg, setMsg] = useState('')

    const onChange = (e) => {
        setPass(e.target.value)
    };

    

    function submitPass(e) {
        e.preventDefault()
        if (pass === key) {
            setCorrect(true)
        } else {
            setMsg('Wrong Password')
        }
    }

    console.log(allQuotes);

    return (
        <Layout>
            { correct ? 
            <div>
            {allQuotes.quotes.map(item => 
                <div key={item.id} className="w-3/4 flex flex-row justify-start items-center bg-gray-200 rounded p-5 mx-auto mb-5">
                <div className="w-40">
                    <p>Quote #</p>
                    <h2 className="text-xl leading-4 my-0" >{item.QuoteNumber}</h2>
                </div>
                <div className="w-80 leading-4">
                    <p>client name: {item.ClientName + item.ClientSurname}</p>
                    <p>created on: {item.CreatedOn}</p>
                    
                </div>
                <div className="ml-auto">
                <Link href={`/admin/${item.id}`} ><button className="bg-gray-500 p-2 rounded-sm h-auto">View Quote</button></Link>
                </div>

            </div>
                    
                    )}
            </div>
                
                :
                <div className="my-20 md:w-1/2 w-full mx-auto">
                    <form>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                        Password
                                    </label>
                        <input className="appearance-none border  w-full mt-3 mb-8 py-2 px-3 text-gray-700 focus:outline-none" onChange={onChange} value={pass} type="password" />
                        <input onClick={submitPass} className="bg-black hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline"  type="submit" />
                    </form>
                    <p>{msg}</p>
                </div>
        }
        </Layout>   
    )
    
}

export async function getStaticProps() {
    const allQuotes = (await getQuotes()) || []
    //const allCateogires = (await getAllCategories()) || []
    return {
        props: { allQuotes }
    }
}
