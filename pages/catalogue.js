import Layout from '../components/layout';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
import HeadSection from '../components/head-section'
import { getAllProducts, getAllProductCategories } from '../lib/api'

// const fakeProducts = [
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'
//     },
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'
//     },
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'
//     },
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'
//     },
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'
//     },
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'
//     },
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'
//     },
//     {
//         title: 'Teapot with black tea',
//         image: "https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg",
//         slug: "fake-product",
//         collection: 'collection'

//     }
// ]

export default function Catalogue({ allProducts, productCategories }) {

    return (
        <Layout>
            <HeadSection Title="Catalogue"/>
            <div className="md:flex flex-row justify-between mb-20 text-center md:text-left px-10 xl:px-0">
                <div>
                    <h3 className="text-xl mb-5 font-medium">Categories</h3>
                    <ul className="text-sm leading-8 md:block flex flex-row flex-wrap justify-evenly">
                        <Link href="/catalogue"><li className="cursor-pointer font-bold hover:text-black hover:scale-105 transform tracking-wide transition-all duration-500 ease-in-out">All</li></Link>
                        {productCategories.productCategories.map( category =>
                        <Link href={`catalogue/category/${category.slug}`}><li key={category.id} className="cursor-pointer hover:text-black hover:scale-105 transform tracking-wide transition-all duration-500 ease-in-out">{category.Title}</li></Link>
                            )}
                    </ul>
                </div>
                <div className="w-full md:w-9/12 mt-20 md:mt-0">
                    <p className="text-regular">{`Showing 1-8 of ${allProducts.products.length} Products`}</p>
                    <div id="container-collection" className="md:flex flex-row flex-wrap " >
                        {allProducts.products.map(product =>

                            <div key={product.id} className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/2 lg:w-1/3 py-5">
                                <Link href={`catalogue/${product.slug}`}>
                                    <div className="bg-gray-500 relative  cursor-pointer">
                                        <img className="transition duration-500 ease-in-out hover:opacity-50" src={product.Image.url} alt={product.Title} width="100%" />
                                    </div>
                                </Link>
                                <div className="flex flex-row justify-between content-start pt-3">
                                    <Link href={`catalogue/${product.slug}`}>
                                        <h5 className="text-xl leading-5 my-0 cursor-pointer">{product.Title}</h5>
                                    </Link>
                                    <ReactTooltip />
                                    <Link href={`catalogue/${product.slug}`}><a data-tip="Add to quote" className="bg-gray-500 p-2 rounded-sm" ><AiOutlinePlus size="1.5em" color="white" /></a></Link>
                                </div>
                                <small>{product.product_category.Title}</small>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticProps() {

    const allProducts = (await getAllProducts()) || []
    const productCategories = (await getAllProductCategories()) || []
    return {
      props: { allProducts, productCategories }
    }
  }