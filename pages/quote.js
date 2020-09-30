
import Layout from '../components/layout'
import HeadSection from '../components/head-section'
import React, { useReducer, useState } from 'react';
import Link from 'next/link';
import { useRouter  } from 'next/router'
import { createQuote } from '../lib/api'

const initialState = {
    clientName: "",
    clientSurname: "",
    clientEmail: "",
    clientNumber: ""
};

const reducer = (state, { name, value }) => {
    return {
        ...state,
        [name]: value
    };
};

export default function QuotePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [quoteCreated, updateState] = useState(false)
    const [returnMsg, setMsg] = useState('')

    const { clientName, clientSurname, clientEmail, clientNumber } = state;

    const productIds = []

    let quoteNumber = Math.floor((Math.random() * 100) + 1);

    const date = new Date()
    const day = JSON.stringify(date.getDate())
    const month = JSON.stringify(date.getMonth())
    const year = JSON.stringify(date.getFullYear())
    const createdOn = `${year}-${month.length > 1 ? month : `0` + month}-${day.length > 1 ? day : `0` + day}`

    const data = [{
        QuoteNumber: `${clientName.slice(0,3) + clientSurname.slice(0,3)}-#${quoteNumber}`,
        CreatedOn : createdOn,
        products: productIds,
        ClientName : clientName,
        ClientSurname: clientSurname,
        ClientNumber: clientNumber,
        ClientEmail: clientEmail,
    }]

  

    const router = useRouter();

    let quoteItems = null
    const removeItem = (e) => {
        const newQuote = [...quoteItems];
         newQuote.splice(e,1)
         if (newQuote.length < 1) {
             localStorage.removeItem('quote');
             router.reload()
         } else {
            localStorage.setItem('quote',JSON.stringify(newQuote))
            router.reload()
         }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({ name, value });
    };

async function submitQuote(e) {
    e.preventDefault()
        if (data[0].ClientNumber == "" || data[0].ClientEmail == "" || data[0].ClientName == "" || data[0].ClientSurname == "") {
            setMsg('Please fill in all fields')
        } else {
            console.log(data);
            const value = await createQuote(data[0])
            console.log(value);
            value.createQuote === null ? setMsg('There was an error creating the quote, please refresh and try again') : setMsg('Quote successfully created')
            if (value.createQuote != null) {
                localStorage.removeItem('quote')
                router.push("/thank-you")
            }
        }
        
        
    }

    

    if (typeof window === 'undefined') {
        return null
    } else {
        if (localStorage.getItem('quote') != null) {

            quoteItems = JSON.parse(localStorage.getItem('quote'));
           // console.log(quoteItems);
            quoteItems.map(item =>
                productIds.push(item.id)
                )


            return (
                <Layout>
                    <HeadSection Title="Request a quote" />
                    <div>
                        <p>You have {quoteItems.length} item/s in your cart</p>
                        {quoteItems.map((item,index) => 
                        
                        <div key={index} className="w-3/4 flex flex-row justify-between items-top bg-gray-200 rounded p-5 mx-auto mb-5">
                            <div className="w-20">
                                <img src={item.Image.url} width="100%" height="100%" alt="product title" className="object-cover" />
                            </div>
                            <div className="w-3/4 ml-5">
                                <h3 className="text-xl my-0 ">{item.Title}</h3>
                                <p>{item.product_category.Title}</p>
                            </div>
                            <div>
                                <button onClick={() => removeItem(index)}  className="bg-gray-500 p-2 rounded-sm">X</button>
                            </div>
        
                        </div>
                        
                        )}
                        

                        
                        <h3 className="text-xl text-center font-bold">Complete the form to request your quote</h3>
                            <form id="quoteForm" className="w-3/4 mx-auto pt-6 pb-8 mb-4">
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                        First Name*
                                    </label>
                                    <input onChange={onChange} value={clientName} name="clientName" required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="name" type="text" placeholder="Your first name" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                        Last Name*
                                    </label>
                                    <input required onChange={onChange} value={clientSurname} name="clientSurname" required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="lastname" type="text" placeholder="Your last name" />
                                </div>
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                        Email*
                                    </label>
                                    <input required onChange={onChange} value={clientEmail} name="clientEmail" required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="email" type="email" placeholder="Your email address" />
                                </div>
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">
                                        Contact number*
                                    </label>
                                    <input required onChange={onChange} value={clientNumber} name="clientNumber" required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="subject" type="number" placeholder="Your contact number" />
                                </div>
        
                                <div className="flex items-center justify-between">
                                    <input type="submit" onClick={submitQuote} className="bg-black hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" value="Submit Quote" />
                                </div>
                            </form>
                            <div className="w-3/4 mx-auto pt-6 pb-8 mb-4">
                                <p>{returnMsg}</p>
                            </div>
                    </div>
                </Layout>
            )
        } else {
            return (
                <Layout>
                    <h2 className="text-center my-20">You dont have any items in your cart</h2>
                    <div className="w-1/3 mx-auto">
                    <Link href="/catalogue"><button className="mx-auto w-full bg-black mb-5 hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="button">Go Browse</button></Link>

                    </div>
                </Layout>
            )
        }
    }



   
    
}