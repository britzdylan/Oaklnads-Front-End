
import HeadSection from '../../components/head-section'
import Layout from '../../components/layout'
import { useRouter  } from 'next/router'
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { AiOutlinePlus, AiOutlineCheck, AiOutlineExclamationCircle } from 'react-icons/ai'
import React, { useState } from 'react';
import { getAllProducts, getProductBySlug } from '../../lib/api'
import ReactMarkdown from 'react-markdown'

const fakeProducts = [
    {
      title: 'Teapot with black tea',
      image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
      slug: "fake-product",
      collection: 'collection'
    },
    {
      title: 'Teapot with black tea',
      image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
      slug: "fake-product",
      collection: 'collection'
    },
    {
      title: 'Teapot with black tea',
      image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
      slug: "fake-product",
      collection: 'collection'
    },
    {
      title: 'Teapot with black tea',
      image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
      slug: "fake-product",
      collection: 'collection'
    }
  ]

  



export default function SingleProduct({ getProduct, allProducts }) {
        const [returnMsg, setMsg] = useState('');
        const [msgColour, setColour] = useState('');
 


    
    let quote = [];


    const router = useRouter();

if (typeof window === 'undefined') {
    return null
} else {
    if (localStorage.getItem('quote') != null) {
        
        quote = JSON.parse(localStorage.getItem('quote'))
     
    }
}



const returnItemThatExits = (arr, slug) => {
    console.log('from func',slug);

    const found = arr.some((el,index) => el.slug === slug);
    console.log('found',found);
    return found
}

    function addToQuote() {
        if (quote.length == 0) {
            quote.push(product);
            localStorage.setItem('quote', JSON.stringify(quote))
        
            setMsg('item added to quote')
            setColour('green')
            
        } else {
            const doesExist = returnItemThatExits(quote, getProduct.products[0].slug)
            console.log(doesExist);
            if (doesExist === true) {
                setMsg('item already added to quote');
                setColour('red')
            } else {
                quote.push(getProduct.products[0]);
                localStorage.setItem('quote', JSON.stringify(quote))
                setMsg('item added to quote')
                setColour('green')
            }
        }
    } 

    return (
        <Layout>
            <HeadSection Title={getProduct.products[0].Title}/>
            <div className="flex flex-row flex-wrap justify-center items-start">
                <div className="w-full md:w-1/2 px-10 mb-20">
                    <img width="400px" height="400px" className="mx-auto object-cover" src={getProduct.products[0].Image.url} alt="product one" />
                </div>
                <div className="w-full md:w-1/2 pl-10">
                    <ReactMarkdown className="mb-10 mt-0" source={getProduct.products[0].Description} />
                    <button onClick={addToQuote} className="bg-black mb-5 hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="button">Add to quote</button>
                    <p className="text-sm">Available: <span className="text-green-500">In Stock with supplier</span></p>
                    <div className={`p-2 bg-${msgColour}-200 my-2 rounded flex flex-row items-center`}>
                        {msgColour == 'green' ? <AiOutlineCheck /> : msgColour == 'red' ? <AiOutlineExclamationCircle /> : null}
                        
                        <p className="my-0 ml-2">{returnMsg}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="mr-5 font-bold">Collections:</p>
                        <Link href={`/catelogue/category/${getProduct.products[0].product_category.slug}`}><p className="mr-2 font-bold text-gray-700 cursor-pointer hover:text-gray-500">{getProduct.products[0].product_category.Title}</p></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="my-20">
                <h3 className="font-bold text-lg text-center">Related Products</h3>
                <div className="flex flex-row flex-wrap w-full">
                {allProducts.products.map(product => 
                <div className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/2 lg:w-1/3 xl:w-1/4 py-5">
                        <Link prefetch={false} href={`/catalogue/${product.slug}`}>
                            <div className="bg-gray-500 relative  cursor-pointer">
                                <img className="transition duration-500 ease-in-out hover:opacity-50" src={product.Image.url} alt={product.Title} width="100%" />
                            </div>
                        </Link>
                        <div className="flex flex-row justify-between content-start pt-3">
                            <Link prefetch={false} href={`/catalogue/${product.slug}`}>
                                <h5 className="text-xl leading-4 my-0 cursor-pointer">{product.Title}</h5>
                            </Link>
                            <ReactTooltip />
                            <button data-tip="Add to quote" className="bg-gray-500 p-2 rounded-sm" ><AiOutlinePlus size="1.5em" color="white" /></button>
                        </div>
                        <small className="leading-4 my-0">{product.product_category.Title}</small>

                    </div>
                )}
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    const products = (await getAllProducts()) || []
    return {
        paths: products.products.map((product) => ({
            params: {
                id: product.slug,
            },
        })),
        fallback: false,
    }
}


export async function getStaticProps({ params }) {
    const getProduct = (await getProductBySlug(params.id)) || []
    const allProducts = (await getAllProducts()) || []

    return {
        props: { getProduct, allProducts },
        revalidate: 1
    }
}