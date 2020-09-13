import Layout from '../components/layout';
import Link from 'next/link';
import { AiOutlinePlus, AiOutlineArrowRight } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
import HeadSection from '../components/head-section'

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
    },
    {
        title: 'Teapot with black tea',
        image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
        slug: "fake-product",
        collection: 'collection'

    }
]

export default function Catalogue() {

    return (
        <Layout>
            <HeadSection Title="Catalogue"/>
            <div className="md:flex flex-row justify-between mb-20 text-center md:text-left px-10 xl:px-0">
                <div>
                    <h3 className="text-xl mb-5 font-medium">Categories</h3>
                    <ul className="text-sm leading-8 md:block flex flex-row flex-wrap justify-evenly">
                        <li>All</li>
                        <li>Accessories</li>
                        <li>Category Name</li>
                        <li>Category Name</li>
                        <li>Category Name</li>
                        <li>Category Name</li>
                    </ul>
                </div>
                <div className="w-full md:w-9/12 mt-20 md:mt-0">
                    <p className="text-regular">Showing 1-9 of 21 Products | Sort by: Default</p>
                    <div id="container-collection" className="md:flex flex-row flex-wrap " >
                        {fakeProducts.map(product =>

                            <div className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/2 lg:w-1/3 py-5">
                                <Link href={product.slug}>
                                    <div className="bg-gray-500 relative  cursor-pointer">
                                        <img className="transition duration-500 ease-in-out hover:opacity-50" src={product.image} alt={product.title} width="100%" />
                                    </div>
                                </Link>
                                <div className="flex flex-row justify-between content-start pt-3">
                                    <Link href={product.slug}>
                                        <h5 className="text-xl  cursor-pointer">{product.title}</h5>
                                    </Link>
                                    <ReactTooltip />
                                    <button data-tip="Add to quote" className="bg-gray-500 p-2 rounded-sm" ><AiOutlinePlus size="1.5em" color="white" /></button>
                                </div>
                                <small>{product.collection}</small>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}