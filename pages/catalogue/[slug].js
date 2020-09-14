
import HeadSection from '../../components/head-section'
import Layout from '../../components/layout'
import { useRouter  } from 'next/router'
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { AiOutlinePlus, AiOutlineArrowRight } from 'react-icons/ai'
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

export default function SingleProduct() {

    const router = useRouter();

    return (
        <Layout>
            <HeadSection Title="Product Name"/>
            <div className="flex flex-row flex-wrap justify-center items-start">
                <div className="w-full md:w-1/2 px-10 mb-20">
                    <img width="400px" height="400px" className="mx-auto object-cover" src="https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/product/single-product-01.jpg" alt="product one" />
                </div>
                <div className="w-full md:w-1/2 pl-10">
                    <h2 className="mt-0 font-bold text-2xl">Product One</h2>
                    <p className="text-sm">Available: <span className="text-green-500">In Stock with supplier</span></p>
                    <p>At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.</p>
                    <button className="bg-black mb-20 hover:bg-gray-700 text-white font-light rounded py-2 px-4  focus:outline-none focus:shadow-outline" type="button">Add to quote</button>
                    <div className="flex flex-row">
                        <p className="mr-5 font-bold">Collections:</p>
                        <Link href="#"><p className="mr-2 font-bold text-gray-700 cursor-pointer hover:text-gray-500">Bedroom</p></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="my-20">
                <h3 className="font-bold text-lg text-center">Realted Products</h3>
                <div className="flex flex-row flex-wrap w-full">
                {fakeProducts.map(product => 
                <div className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/2 lg:w-1/3 xl:w-1/4 py-5">
                        <Link href={product.slug}>
                            <div className="bg-gray-500 relative  cursor-pointer">
                                <img className="transition duration-500 ease-in-out hover:opacity-50" src={product.image} alt={product.title} width="100%" />
                            </div>
                        </Link>
                        <div className="flex flex-row justify-between content-start pt-3">
                            <Link href={product.slug}>
                                <h5 className="text-xl leading-4 my-0 cursor-pointer">{product.title}</h5>
                            </Link>
                            <ReactTooltip />
                            <button data-tip="Add to quote" className="bg-gray-500 p-2 rounded-sm" ><AiOutlinePlus size="1.5em" color="white" /></button>
                        </div>
                        <small className="leading-4 my-0">{product.collection}</small>

                    </div>
                )}
                </div>
            </div>
        </Layout>
    )
}