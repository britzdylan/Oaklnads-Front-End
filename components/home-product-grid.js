import Link from 'next/link'
import { AiOutlinePlus, AiOutlineArrowRight } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
export default function HomeProductGrid({ allProducts }) {

    return (
        <div className="md:p-20 p-1 xl:p-0 my-40 w-full mx-auto">
            <div className="md:flex flex-row justify-between mb-10">
                <h4 className="font-bold text-3xl">Browse our products</h4>
                <Link href="#">
                    <div className="flex flex-row justify-between items-center cursor-pointer">

                        <p className="font-bold mr-2">View All </p>
                        <AiOutlineArrowRight size="2em" />

                    </div>
                </Link>
            </div>
            <div id="container-collection" className="md:flex flex-row flex-wrap " >
                {allProducts != undefined ? allProducts.products.map(product =>

                    <div className="w-full px-5 lg:pr-5 lg:px-0 place-items-start md:w-1/2 lg:w-1/3 xl:w-1/4 py-5">
                        <Link href={`catalogue/${product.slug}`}>
                            <div className="bg-gray-500 relative  cursor-pointer">
                                <img className="transition duration-500 ease-in-out hover:opacity-50" src={product.Image.url} alt={product.Title} width="100%" />
                            </div>
                        </Link>
                        <div className="flex flex-row justify-between content-start pt-3">
                            <Link href={`catalogue/${product.slug}`}>
                                <h5 className="text-xl leading-4 my-0 cursor-pointer">{product.Title}</h5>
                            </Link>
                            <ReactTooltip />
                            <Link href={`catalogue/${product.slug}`}><a data-tip="Add to quote" className="bg-gray-500 p-2 rounded-sm" ><AiOutlinePlus size="1.5em" color="white" /></a></Link>
                        </div>
                        <small className="leading-4 my-0">{product.product_category.Title}</small>

                    </div>

                ) : <p>oops something went wrong</p>}
            </div>
        </div >
    )
}
