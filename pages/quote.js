
import Layout from '../components/layout'
import HeadSection from '../components/head-section'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter  } from 'next/router'

export default function QuotePage() {
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
        console.log(newQuote);
    }

    

    

    if (typeof window === 'undefined') {
        return null
    } else {
        if (localStorage.getItem('quote') != null) {

            quoteItems = JSON.parse(localStorage.getItem('quote'));
            console.log(quoteItems);
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
                            <form className="w-3/4 mx-auto pt-6 pb-8 mb-4">
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                        Full Name*
                                    </label>
                                    <input required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="name" type="text" placeholder="Your full name" />
                                </div>
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                        Email*
                                    </label>
                                    <input required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="email" type="email" placeholder="Your email address" />
                                </div>
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">
                                        Contact number*
                                    </label>
                                    <input required className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" id="subject" type="number" placeholder="Your contact number" />
                                </div>
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                                        Tell us a bit about your project?
                                    </label>
                                    <textarea className="appearance-none border  w-full py-2 px-3 text-gray-700 focus:outline-none" rows="10" id="message" type="text" placeholder="Your message..." />
                                </div>
        
                                <div className="flex items-center justify-between">
                                    <button className="bg-black hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                                        Request your quote
                                    </button>
                                </div>
                            </form>
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